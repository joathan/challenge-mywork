json.extract! address, :id, :lat, :lon, :place, :zip_code, :state, :city, :complement, :bairro, :created_at, :updated_at
json.url address_url(address, format: :json)
