#!/bin/bash

# Set paths
INVENTORY_PATH="/home/ansible/slaves.txt"
PLAYBOOK_PATH="/opt/docker/"
ANSIBLE1= "ansible-build-push-docker.yml"
ANSIBLE2="ansible-pull-run-docker.yml"

# Run Ansible Playbook
ansible-playbook -i "$INVENTORY_PATH" "$PLAYBOOK_PATH" "$ANSIBLE1"
ansible-playbook -i "$INVENTORY_PATH" "$PLAYBOOK_PATH" "$ANSIBLE2"

