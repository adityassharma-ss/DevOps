<h1 align="center">Kubernetes</h1>

Kubernetes is an open-source container orchestration system for automating the deployment, scaling, and management of containerized applications. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF).

Kubernetes allows you to run and manage containerized applications in a cluster of machines. It provides a number of features to help you manage your applications, including:

Deployment and rollback: Kubernetes allows you to easily deploy your applications to a cluster, and rollback to a previous version if necessary.

Scaling: Kubernetes allows you to scale your applications up or down based on demand, by adding or removing replicas of your application's containers.

Load balancing: Kubernetes can automatically distribute incoming traffic across your application's replicas to ensure that your application can handle a high volume of requests.

Self-healing: Kubernetes can automatically restart containers that fail, or replace them with new ones if necessary.

Service discovery: Kubernetes allows you to easily access the services running in your cluster using DNS names, eliminating the need to hardcode IP addresses or ports in your application.

Kubernetes is a powerful tool that can help you manage and deploy your containerized applications at scale. It is widely used in the industry and has a large, active community of users and contributors.

<h1 align="center">Configuration Files</h1>

Generally, A K8s YAML config file contains 4 properties

`apiVersion: # Which version of the API you are using
kind: # What kind of object you are creating
metadata: # Data about the object
spec: # What you want the object to look like`

<h1 align="center">Deployment</h1>

In Kubernetes, a deployment configuration (also known as a "deployment" or "deployment spec") is a specification for how to deploy and manage a set of replicas of a particular application. It defines the desired state of the application and the desired number of replicas, and Kubernetes will ensure that the application is running in the desired state.

A deployment configuration is typically defined in a YAML file, which specifies the following information:

The container image(s) to use for the application
The number of replicas to run
The resources (e.g. CPU and memory) to allocate to each replica
The container ports to expose
Environment variables to set for the container(s)
Volumes to mount into the container(s)
Labels to apply to the deployment and its components (e.g. pods and replicasets)

Here is an example of a deployment configuration for a simple web server:

`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-web-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-web-server
  template:
    metadata:
      labels:
        app: my-web-server
    spec:
      containers:
      - name: my-web-server
        image: nginx:1.17
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: 100m
            memory: 128Mi
          requests:
            cpu: 100m
            memory: 128Mi`

The above deployment configuration will create a deployment named my-web-server, which will run 3 replicas of the nginx:1.17 container image. Each replica will be allocated 100m CPU and 128Mi memory, and will expose port 80 to the cluster.

<h1 align="center">Services</h1>
Services are for internal communication of pods. It also helps give a pop static IP address. Contains routing rules. It also provide loadbalancing.

# Types of Services
ClusterIP: For inter communication of pods

HeadLess: It is a direct communication with a pod. No load blancing is required. So in this ClusterIp is none

`spec:
  clusterIP: None `

<h1 align="center">ConfigMap</h1>
Use to store external configurations like database URLs. We put it in simple text format unlike Secrets

`apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
  database_url: mongodb-service`



