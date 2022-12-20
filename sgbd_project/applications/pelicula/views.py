from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .documents import CarDocument
from elasticsearch_dsl.query import MoreLikeThis
from elasticsearch_dsl.connections import connections
from elasticsearch import Elasticsearch
from elasticsearch_dsl import A, MultiSearch, Search,Q,A
from rest_framework.generics import  ListAPIView
from .serializers import projectSerializer, InfoSerializer
from .models import Movie
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
import django_filters
from rest_framework import serializers
import json
from datetime import datetime

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
        
            
        #ms = ms.add(Search().filter("term", original_title=name))
        # Count search results
        total = s.count()

        # What does this step do?
        s = s[0:total]
        responses= s.execute()

       
        #MovieList
        MovieList=[]
        for response in responses:
                MovieList.append(response)
       
        
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
        
        #captura de parametres per http request
        category=self.request.GET.get('genre')
        name=self.request.GET.get('original_title')
        language=self.request.GET.get('original_language')
        min_date=self.request.GET.get('min_date') #yyyymmdd
        max_date=self.request.GET.get('max_date')
        id_ = self.request.GET.get('id')


     
        
        #creacio de la query
        #MultiSerch
         
        ms=MultiSearch(index='movies')
        s=Search()
        
        #filtres de la query
        
        if min_date is not None:
            minDate=datetime.strptime(min_date, '%Y%m%d').strftime('%Y-%m-%d')
            s=s.filter("range", release_date={"gte":minDate})
            
        if max_date is not None:
            maxDate=datetime.strptime(max_date, '%Y%m%d').strftime('%Y-%m-%d')
            s=s.filter("range", release_date={"lte":maxDate})  
            
        if category is not None:
            s=s.filter("term", genre=category)    
            
        if language is not None:
            s=s.filter("term", original_language=language)
        
        if id_ is not None:
            s=s.filter("term", id = id_)
            
            
        #query de la cerca
               
        if name is not None:
            s=s.query("match", original_title=name)
        else:
            s=s.query("match_all")
        
        
        # Count search results
        total = s.count()
        s = s[0:total]
        
        
        ms =ms.add(s)
        responses=ms.execute()
        responses=responses[0:10000]
        print()
        
        #MovieList
        #MovieList
        queryset=[]
        for response in responses:
            for hit in response:
                try:
                    movieJson={}
                    movieJson['id']=hit.id
                    movieJson['budget']=hit.budget
                    movieJson['genre']=hit.genre
                    movieJson['original_language']=hit.original_language
                    movieJson['original_title']=hit.original_title
                    movieJson['overview']=hit.overview
                    movieJson['production_company']=hit.production_company
                    movieJson['production_country']=hit.production_country
                    movieJson['release_date']=hit.release_date
                    movieJson['revenue']=hit.revenue
                    movieJson['runtime']=hit.runtime
                    queryset.append(movieJson)
                 except:
                    print (hit)
                    print("error")
                    pass
       
       
        
        #creacio del queryset
        return queryset
  
        
  
  
class InfoAPIList(ListAPIView):
    serializer_class = InfoSerializer
    def get_queryset(self):
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
        queryset={"languageList":LanguageList, "categoryList":CategoryList}
        x=[]   
        x.append(queryset)
        print(x)
        return x
        

  