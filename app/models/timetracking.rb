class Timetracking < ApplicationRecord
  belongs_to :collaborator

  acts_as_mappable :default_units => :meters,
                   :default_formula => :sphere,
                   :lat_column_name => :lat,
                   :lng_column_name => :lng

  validates_presence_of :description
end
