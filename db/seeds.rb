
def create_users
  User.create(username: 'jon', email: 'jon@abc.com', password: 'password')
  User.create(username: 'jane', email: 'jane@abc.com', password: 'password')
  User.create(username: 'joe', email: 'joe@abc.com', password: 'password')
end

def create_sources
  Source.create(name: 'google news', url: 'https://news.google.com')
  Source.create(name: 'yahoo news', url: 'https://news.yahoo.com')
  Source.create(name: 'cnn news', url: 'https://cnn.com')
end

def create_users_sources
  UserSource.create(user_id: 1, source_id: 1)
  UserSource.create(user_id: 2, source_id: 2)
  UserSource.create(user_id: 3, source_id: 3)
end

def import_sources
  Source.import("sources.csv")
end

def scrape_sources
  Scrape.new
end

def main
  create_users
  create_sources
  create_users_sources
  import_sources
  scrape_sources
end

main