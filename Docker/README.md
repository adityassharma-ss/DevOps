<h1 align="center"> Docker </h1>

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

Docker provides a way to package an application and its dependencies in a container image, which can be run on any machine that has Docker installed. This allows developers to create and test applications in a consistent environment, ensuring that the application will behave the same way no matter where it is deployed.

Docker also provides a platform for deploying and managing containerized applications at scale. It includes tools for building, sharing, and running container images, as well as tools for orchestration and management of containerized applications in production environments.

Overall, Docker makes it easier for developers to create, deploy, and manage applications, particularly in environments where different parts of the application may be running on different machines or in different environments.

It is probably worth breaking down some of the "docker" tools that we will be using and what they are used for. The term docker can be referring to the docker project overall, which is a platform for devs and admins to develop, ship and run applications. It might also be a reference to the docker daemon process running on the host which manages images and containers also called Docker Engine.

### Docker Engine

Docker Engine is an open-source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:

- A server with a long-running daemon process dockerd.
- APIs specify interfaces that programs can use to talk to and instruct the Docker daemon.
- A command line interface (CLI) client docker.

The above was taken from the official Docker documentation and the specific [Docker Engine Overview](https://docs.docker.com/engine/)

### Docker Desktop

We have a docker desktop for both Windows and macOS systems. An easy-to-install, lightweight docker development environment. A native OS application that leverages virtualisation capabilities on the host operating system.

It’s the best solution if you want to build, debug, test, package, and ship Dockerized applications on Windows or macOS.

On Windows, we can also take advantage of WSL2 and Microsoft Hyper-V. We will cover some of the WSL2 benefits as we go through.

Because of the integration with hypervisor capabilities on the host operating system docker provides the ability to run your containers with Linux Operating systems.

### Docker Compose

Docker compose is a tool that allows you to run more complex apps over multiple containers. With the benefit of being able to use a single file and command to spin up your application.

### Docker Hub

A centralised resource for working with Docker and its components. Most commonly known as a registry to host docker images. But there are a lot of additional services here which can be used in part with automation or integrated into GitHub as well as security scanning.

### Dockerfile

A dockerfile is a text file that contains commands you would normally execute manually to build a docker image. Docker can build images automatically by reading the instructions we have in our dockerfile.

## Installing Docker Desktop

The [docker documenation](https://docs.docker.com/engine/install/) is amazing and if you are only just diving in then you should take a look and have a read-through. We will be using Docker Desktop on Windows with WSL2. I had already run through the installation on the machine we are using here.

![](Images/Day43_Containers1.png)

Take note before you go ahead and install at the system requirements, [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/) if you are using macOS including the M1-based CPU architecture you can also take a look at [Install Docker Desktop on macOS](https://docs.docker.com/desktop/mac/install/)

