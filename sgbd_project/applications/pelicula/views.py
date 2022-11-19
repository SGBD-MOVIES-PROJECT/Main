from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .documents import CarDocument
from elasticsearch_dsl.query import MoreLikeThis
from elasticsearch_dsl.connections import connections
from elasticsearch import Elasticsearch
from elasticsearch_dsl import A, MultiSearch, Search,Q,A
from rest_framework.generics import  ListAPIView
from .serializers import projectSerializer
from .models import Movie
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet


class PeliculaListView(ListView):
    template_name = "../templates/pelicula/home.html"
    def get_queryset(self):
        name = self.request.GET.get('title','')
        category = self.request.GET.get('category','')
        language = self.request.GET.get('language','')
        #dateMax = self.request.GET.get('date_max','')
        #dateMin= self.request.GET.get('date_min','')
        
        
       
        #MultiSerch
        ms=MultiSearch(index='movies')
        s=Search()
        if(category!='all'):
            s=s.filter("match", genre=category)
            
        if(language !='all'):
             s=s.filter("term", original_language=language)
        
        #s=s.filter("range", release_date={"gte":dateMin,"lte":dateMax})
               
        if(name!=''):
            s=s.query("match", original_title=name)
       
       
        # ms = ms.add(Search().filter("term", original_language="it"))
        ms =ms.add(s)
            
        #ms = ms.add(Search().filter("term", original_title=name))
        responses=ms.execute()
       
        #MovieList
        MovieList=[]
        for response in responses:
            for hit in response:
                MovieList.append((hit.original_title +" | "+ hit.original_language +" | "+ hit.genre +" | "+ hit.release_date))
       
        
        #Aggregate Search
        s = Search(index="movies")
        s.query('match_all')
        s.aggs.bucket('by_genre', 'terms', field='genre.keyword',)
        s.aggs.bucket('by_language', 'terms', field='original_language.keyword',)
        s = s.execute()
          
        #Category Aggregation
        CategoryList=[]
        for aggregation in s.aggregations.by_genre.buckets: 
            CategoryList.append(aggregation.key)
            
        #Language Aggregation
        LanguageList=[]
        for aggregation in s.aggregations.by_language.buckets:
            LanguageList.append(aggregation.key)
       
        
        
          
        #creacio del queryset   
        queryset={"LanguageList":LanguageList, "CategoryList":CategoryList, "MovieList":MovieList}
        return queryset
      
    context_object_name = 'info'


# Create your views here.

class PeliculaListAPIView(ListAPIView):
    
    serializer_class = projectSerializer
    def get_queryset(self):   
        return Movie.objects.all()
    
class PeliculaSearchAPIView(ListAPIView):
    serializer_class = projectSerializer
    def get_queryset(self):   
        kword = self.kwargs['kword']
        print(kword)
        #print("hola" + kword)
       # s = Search(index="movies")
       # s= s.query("term", original_language=kword)
       # return s.execute()
        return []
  
  
class book(DocumentViewSet):

    document = CarDocument
    serializer_class = projectSerializer
    lookup_field = 'id'

    filter_backends = [
       SearchFilter, OrderingFilter
    ]

    simple_query_string_search_fields = {
        'title': {'boost': 4},
        'summary': {'boost': 2},
        'description': None,
    }

    #ordering = ('_score', 'id', 'title', 'price',)