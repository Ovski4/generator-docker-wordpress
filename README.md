Docker wordpress generator
==========================

Install first files to get started on a wordpress project, running with docker.

Requirements
------------

This generator is made for ubuntu/debian systems

You will need on your machine
 * docker
 * docker-compose
 * mysql client
 * A container jwilder/nginx-proxy running

How does it works
-----------------

Once the files are generated, just run the run.sh script.

```
chmod +x run.sh
./run.sh
```

This script will add host entries according to your answers to the generator.
 * 'dev.projectname.fr' will point to the wordpress site
 * 'dev.logs.projectname.fr' will point to an adminer interface 
 * 'dev.adminer.projectname.fr' will point to a kibana interface, so you can have your logs in a nice way.

mysql files will be stored in /var/docker/mysql/projectname on your machine  
elk data is located in /var/docker/elk/projectname on your machine

TODO
----

Check how to log with nice colors
Generate a makefile question
check kibana imports
