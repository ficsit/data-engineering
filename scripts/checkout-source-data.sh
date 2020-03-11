#!/usr/bin/env bash
set -e

DESTINATION=./.source-data
TARGET_REF="${1:-master}"

if [[ ! -d "${DESTINATION}" ]]; then
  git clone \
    https://github.com/ficsit/source-data \
    --quiet \
    --reference-if-able ../source-data \
    -n \
    "${DESTINATION}"
fi

cd "${DESTINATION}"
git fetch --quiet --tags --force --prune-tags origin
git checkout --quiet "${TARGET_REF}"