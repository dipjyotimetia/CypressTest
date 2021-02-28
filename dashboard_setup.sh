#!/usr/bin/env bash
docker run agoldis/sorry-cypress-director
sleep 30s
docker-compose -f ./docker-compose.minio.yml up