#!/usr/bin/env bash
set -e

DESTINATION=./.data-warehouse
TARGET_REF="${1:-master}"

if [[ ! -d "${DESTINATION}" ]]; then
  git clone \
    https://github.com/ficsit/data-warehouse \
    --quiet \
    --reference-if-able ../data-warehouse \
    -n \
    "${DESTINATION}"
fi

cd "${DESTINATION}"
git fetch --quiet --tags --force --prune-tags origin
git checkout --quiet "${TARGET_REF}"