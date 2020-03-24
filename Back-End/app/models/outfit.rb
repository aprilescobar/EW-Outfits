class Outfit < ApplicationRecord
  belongs_to :top
  belongs_to :bottom
  belongs_to :shoe
  has_many :comments

  def self.seasons
    ["Spring", "Summer", "Fall", "Winter"]
  end

end
