class AddGeofenceToCollaborator < ActiveRecord::Migration[5.2]
  def change
    add_reference :collaborators, :geofence, foreign_key: true
  end
end
