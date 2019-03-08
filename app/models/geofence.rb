class Geofence < ApplicationRecord
  validates_presence_of :description
  validates_presence_of :radius
  validates_presence_of :lat
  validates_presence_of :lng
end
