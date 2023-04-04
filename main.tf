data "terraform_remote_state" "vpc" {
  backend = "s3"
  config = {
    bucket = "grupo-rubi-bucket"
    # key    = "infrastructure/${var.env}/terraform.tfstate"
    key    = "infrastructure/terraform.tfstate"
    region = "us-east-1"
  }
}

module "eks" {
  source = "git::https://github.com/camilaqueiroz-mck/modules//eks_module"
  env = var.env
  subnets_private_ids = data.terraform_remote_state.vpc.output.private_subnet_id
}

module "ecr" {
  source = "git::https://github.com/camilaqueiroz-mck/modules//ecr_module"
  name = var.name
}