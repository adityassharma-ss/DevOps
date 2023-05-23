# Creating EKS cluster on AWS using eksctl

## Installing EKS:

```
brew tap weaveworks/tap
```

```
brew install weaveworks/tap/eksctl
```

# Creating an EKS cluster on AWS:

```
eksctl create cluster \

--name test-cluster \
--version 1.17 \
--region eu-central-1 \
--nodegroup-name linux-nodes \
--node-type t2.micro \
--nodes 2