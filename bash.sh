#!/bin/bash

# Set paths
INVENTORY_PATH="/home/ansible/slaves.txt"
PLAYBOOK1="/opt/docker/ansible-build-push-docker.yml"
PLAYBOOK2="/opt/dokcer/ansible-pull-run-docker.yml"

# Run Ansible Playbook
ansible-playbook -i "$INVENTORY_PATH" "$PLAYBOOK1";
ansible-playbook -i "$INVENTORY_PATH" "$PLAYBOOK2";
