#  Private Class, Read Class, Write Class, Read and write
class Car
  # constructor() {}
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  attr_reader :make
  attr_reader :model
  attr_reader :year

  attr_writer :make
  attr_writer :model
  attr_writer :year

  attr_accessor :make
  attr_accessor :model
  attr_accessor :year
  # def make
  #   return @make
  # end

  # def model
  #   return @model
  # end

  # def year
  #   return @year
  # end

  # def make_write make_write
  #   @make = make_write
  # end


end

# const Car = new Car()

my_car = Car.new('Honda', 'civic', 1990)

p my_car.make
p my_car.year
p my_car.model

my_car.make = "Ford"