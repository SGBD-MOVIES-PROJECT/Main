# Generated by Django 4.1.2 on 2022-12-18 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Movie",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("budget", models.IntegerField()),
                ("genre", models.TextField(max_length=32)),
                ("original_language", models.TextField(max_length=16)),
                ("original_title", models.CharField(max_length=128)),
                ("overview", models.CharField(max_length=1024)),
                ("production_company", models.CharField(max_length=128)),
                ("production_country", models.CharField(max_length=128)),
                ("release_date", models.DateField()),
                ("revenue", models.DecimalField(decimal_places=2, max_digits=12)),
                ("runtime", models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
    ]
