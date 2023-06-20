# Blocks of code, every block will have an end
# Loop code, the block has a do...end
# If state if...end

# i = 0
# loop do
#   # ++ --
#   i += 1
#   p "Hello! #{i}"
#   break if(i > 10)
# end

# while(i < 10) do
#   i += 1
#   p "Hello! #{i}"
# end

names = ['Joe', 'Sam', 'Andrew']
p names

# names.forEach((name, index) => console.log(name))
# names.each do |name, idx|
#   p "Hello, #{name} the number is #{idx}"
# end

# names.each_with_index do |name, idx| 
#   p "Hello, #{name} the number is #{idx}"
# end

# JS for...of for(let name of names)
for name in names do
  p "Hello There #{name}"
end