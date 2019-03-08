json.extract! geofence, :id, :lat, :lng, :radius, :created_at, :updated_at
json.url geofence_url(geofence, format: :json)
