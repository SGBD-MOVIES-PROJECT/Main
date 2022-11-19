from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl.registries import registry
from .models import Movie


@registry.register_document
class CarDocument(Document):
    class Index:
        # Name of the Elasticsearch index
        name = 'movies'
        # See Elasticsearch Indices API reference for available settings
        settings = {'number_of_shards': 1,
                    'number_of_replicas': 1}
        
 
    class Django:
        model = Movie # The model associated with this Document

        
        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            'original_title',
            'original_language',
            'genre',
        ]