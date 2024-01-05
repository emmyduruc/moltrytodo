# #===================#
# #== Env Variables ==#
# #===================#
# DOCKER_COMPOSE_FILE ?= docker-compose.yml


# #========================#
# #== DATABASE MIGRATION ==#
# #========================#

# migrate-up: ## Run migrations UP
# migrate-up:
#  docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate up

# migrate-down: ## Rollback migrations against non test DB
# migrate-down:
#  docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate down 1

# migrate-create: ## Create a DB migration files e.g `make migrate-create name=migration-name`
# migrate-create:
#  docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate create -ext sql -dir ./db/migrations $(name)

# shell-db: ## Enter to database console
# shell-db:
#  docker compose -f ${DOCKER_COMPOSE_FILE} exec db psql -U postgres -d postgres

#===================#
#== Env Variables ==#
#===================#
DOCKER_COMPOSE_FILE ?= docker-compose.yml

#========================#
#== DATABASE MIGRATION ==#
#========================#

migrate-up: ## Run migrations UP
	docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate up

migrate-down: ## Rollback migrations against non test DB
	docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate down 1

migrate-create: ## Create a DB migration files e.g `make migrate-create name=migration-name`
	docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate create -ext sql -dir ./db/migrations $(name)

shell-db: ## Enter to database console
	docker compose -f ${DOCKER_COMPOSE_FILE} exec db psql -U postgres -d postgres

tidy: ## Tidy go modules
	go mod tidy