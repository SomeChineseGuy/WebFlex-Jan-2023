# Hash === collection of key/value
# an obj is a key/value that is a collection of behavior

# user = {
#   "username"  => "Tron",
#   "password" => 123
# }

# p user
# puts user["username"]

# # "" == obj
# # 123 == obj

# p "".methods
# p 1.methods

user = {
  :username => "Terry"
}

puts user[:username]

user[:username] = "John"
user[:age] = 100

p user

# p :username.methods