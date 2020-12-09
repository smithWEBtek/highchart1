class User < ApplicationRecord
  has_many :user_resources
  has_many :resources, through: :user_resources
end
