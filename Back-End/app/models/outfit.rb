class Outfit < ApplicationRecord
  belongs_to :top
  belongs_to :bottom
  belongs_to :shoe
  has_many :comments

  def total_score
    t_score = self.top.score
    b_score = self.bottom.score
    s_score = self.shoe.score
    score = t_score + b_score + s_score
    return score
  end

end
