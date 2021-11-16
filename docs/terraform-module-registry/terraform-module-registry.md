---
sidebar_position: 1
---

# Terraform module registry
Publish Terraform modules, then reference them using ModuleHub as a Terraform module registry.

## Connect a module

* Navigate to modules
* Click create a module
* Choose a Terraform module git repository from the list
* Click CONNECT

```
module "my_module" {
  source  = "registry.v2.modulehub.io/modulehub/terraform-test/modules"
  version = "1.0.7"
}
```
