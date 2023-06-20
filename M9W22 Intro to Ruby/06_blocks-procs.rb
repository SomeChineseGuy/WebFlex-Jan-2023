# block do..end

# Proc procedure

names = ['alice', 'ryan', 'sarah']

# names.each do |name|
#   puts "Hello #{name}"
# end

my_block = Proc.new do |name| 
  puts "Hello #{name}"
end

names.each &my_block

num = [1,2,3,4]

num.each &my_block

def accepting_blocks
  puts "Before"
  # callback("Sunny")
  yield "Sunny"
  puts "After"
end

my_new_proc = Proc.new do |weather|
  puts "The weather is #{weather}"
end

accepting_blocks &my_new_proc