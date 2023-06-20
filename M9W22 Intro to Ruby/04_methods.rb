def say_hello name, age, isHappy = nil
  # puts "Hello there, #{name}"
  message = "Hello there #{name} and your age is #{age}"
  message
end

hello_steve = say_hello('Steve', 100)
p hello_steve