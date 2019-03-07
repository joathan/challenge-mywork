class AddDescriptionToGeofence < ActiveRecord::Migration[5.2]
  def change
    add_column :geofences, :description, :text
  end
end
