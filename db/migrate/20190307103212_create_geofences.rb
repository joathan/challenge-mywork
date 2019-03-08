class CreateGeofences < ActiveRecord::Migration[5.2]
  def change
    create_table :geofences do |t|
      t.float :lat, precision: 10, scale: 6
      t.float :lng, precision: 10, scale: 6
      t.integer :radius

      t.timestamps
    end
  end
end
