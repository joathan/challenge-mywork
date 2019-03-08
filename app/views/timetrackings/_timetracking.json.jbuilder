json.extract! timetracking, :id, :lat, :lng, :description, :collaborator_id, :created_at, :updated_at
json.url timetracking_url(timetracking, format: :json)
