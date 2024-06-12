# KIND Kubernetes cluster setup

## Prerequisites
- Docker installed on local computer
- YAML files created
  - Kind config
  - App deployment and service
  - Ingress
  
## Create a Kind K8 cluster
Run the command in the terminal 

```
kind create cluster --config ./config/kind-config.yaml
```

## Ingress setup
In order to set up the kind ingress with nginx, run the command

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

kubectl can be replaced by k8 as the local computer has been setup with a shortcut in the alias.

```
k8 apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

Wait for the ingress to be created

```
k8 wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```

Once the ingress is applied and running then move on to the next step.

## Deployment setup
In order to apply the deployment of the application along with the service then use the following command in the terminal

```
k8 apply -f ./kubes/weather/weather-deployment.yaml
```

This will set up the pods and the service that will be listening to the ingress as the traffic is routed here.

## Local ingress file setup
Run the command in the terminal

```
k8 apply -f ./kubes/server/nginx-ingress.yaml
```

This will allow traffic to be routed through the ingress to the port that the application is using. It will go through the regular port (80) and be routed accordingly.

## Test the application
Open a browser and open a tab. Go to the local host address (127.0.0.1) or most commonly type in localhost. That should route you to the http address with the port 80. From here the ingress should route to the port of the application and you should see your application running and functioning.

If you are getting an error, make sure that you are using http in the address bar. If you only type localhost then it might use the https which is on a different port (443).