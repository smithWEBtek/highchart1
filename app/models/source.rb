class Source < ApplicationRecord
 
  require 'csv'

  has_many :user_sources
  has_many :users, through: :user_sources
  validates :name, :url, presence: true, uniqueness: true

  # put file in /lib/assets/<test.csv>
  def self.import(file)
    file = Rails.root.join('lib', 'assets', file)
    data = CSV.foreach(file, headers: true) do |row|
      if new_source = Source.create(url: row[0], name: row[1].strip)
        puts '... import success ...'
      else 
        puts "failed to import #{row}"
      end
    end
  end

end
