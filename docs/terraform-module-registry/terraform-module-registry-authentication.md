---
sidebar_position: 2
---

# Terraform module registry authentication
Publish Terraform modules, then reference them using ModuleHub as a Terraform module registry.

## Connect a module
When running Terraform on the CLI, you must configure credentials
in or ~/terraform.d/credentials.json or .terraformrc or
terraform.rc to access this module:
```
{ 
  "credentials": { 
    "registry.v2.modulehub.io": { 
      "token": "your_api_key_here" 
    } 
  } 
}
```

Using in Terraform like this
```
module "my_module" {
  source  = "registry.v2.modulehub.io/modulehub/terraform-test/modules"
  version = "1.0.7"
}
```
