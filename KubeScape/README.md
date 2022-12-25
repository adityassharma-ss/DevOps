<h1 align="center">Kubescape</h1>

Kubescape is a K8s open-source tool providing a Kubernetes single pane of glass, including risk analysis, security compliance, RBAC visualizer, and image vulnerabilities scanning. Kubescape scans K8s clusters, YAML files, and HELM charts, detecting misconfigurations according to multiple frameworks (such as the NSA-CISA, MITRE ATT&CK®), software vulnerabilities, and RBAC (role-based-access-control) violations at early stages of the CI/CD pipeline, calculates risk score instantly and shows risk trends over time.
</br>
Kubescape dives into K8s and checks your manifests files from the inside - most other solutions and tools check from a CSPM perspective (CSP properties to K8s and not K8s standalone)
Kubescape also supports custom frameworks that can be used at any stage in the SDLC (dev-> Prod)
Kubescape is the only product that shows you how to fix your issues with actionable recommendations</br>

It is getting more and more popular among developers with each passing day, due to its easy-to-use CLI interface, flexible output formats, and automated scanning capabilities, saving Kubernetes users and admins precious time, effort, and resources. Kubescape integrates natively with other DevOps tools, including Jenkins, CircleCI, Github workflows, Prometheus, and Slack, and supports multi-cloud K8s deployments like EKS, GKE, and AKS.</br>

Kubescape scans K8s clusters, Kubernetes manifest files (YAML files, and HELM charts), code repositories, container registries and images, detecting misconfigurations according to multiple frameworks (such as the NSA-CISA, MITRE ATT&CK®), finding software vulnerabilities, and showing RBAC (role-based-access-control) violations at early stages of the CI/CD pipeline.</br>

It is open to use on different platforms such as MacOS, Windows & Linux. There are various ways from which your clusters can be in threat, like how vulnerable your clusters really are to threats.
Kubescape is the only Kubernetes security assessment solution (commercial and open-source) that scans your:

• K8s Manifest files (YAML, Helm), and
• API server settings, and
• Worker node settings
</br>
Kubescape dives into K8s and checks your manifests files from the inside - most other solutions and tools check from a CSPM perspective (CSP properties to K8s and not K8s standalone)
Kubescape also supports custom frameworks that can be used at any stage in the SDLC (dev-> Prod)
Kubescape is the only product that shows you how to fix your issues with actionable recommendations
Working of Kubescape:
Kubescape is based on OPA engine and ARMO's posture controls. it retrieves the Kubernetes objects from the API server and scans them by running a set of regos snippets developed by ARMO.
The output results are printed in a “console friendly" manner by default, but they can be also retrieved in JSON or Junit format for further processing.
To learn more, visit  <a href="https://github.com/kubescape/kubescape?utm_campaign=Community%20Classroom%20%7C%20Kunal%20Kushwaha&utm_source=Influencers%20&utm_medium=Community%20Classroom%20&utm_content=Kubescape%20GitHub" target="_blank">Kubescape</a>