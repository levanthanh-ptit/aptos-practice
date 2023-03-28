#!/bin/bash

set -euo pipefail

FLAG_PROJECT=${FLAG_PROJECT:-""}
FLAG_PROFILE=${FLAG_PROFILE:-"default"}
FLAG_RAW=""

FLAG_CMD=$1
shift 1

while [[ $# -gt 0 ]]; do
  case "$1" in
  -p | --project)
    FLAG_PROJECT=$2
    shift 2
    ;;
  --profile)
    FLAG_PROFILE=$2
    shift 2
    ;;
  --)
    shift 1
    FLAG_RAW=("$*")
    ;;
  *)
    echo "Unrecognized argument: $1"
    ;;
  esac
done

readonly FLAG_PROJECT

function new() {
  mkdir "$FLAG_PROJECT"
  cd $FLAG_PROJECT
  aptos move init --name "$FLAG_PROJECT"
}

function init() {
  cd $FLAG_PROJECT
  aptos init $FLAG_RAW
}

function fund_contract() {
  cd $FLAG_PROJECT
  aptos account fund-with-faucet --account $FLAG_PROFILE
}

function publish() {
  cd $FLAG_PROJECT
  aptos move publish --named-addresses project=$FLAG_PROFILE
}

case $FLAG_CMD in
new)
  new
  ;;
init)
  init
  ;;
fund)
  fund_contract
  ;;
publish)
  publish
  ;;
esac
