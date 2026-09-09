# def sqr(num):
#     sqrs = num ** 2
#     cube = num ** 3
#     # return "afaf"
#     return 1000
#     #return #sqrs , cube


# print(sqr(2))
# print(type(sqr(2)))

# def append_data(input_data, num):
#     out = input_data.copy()
#     out.append(num)
#     return out

# data = [100,200,300]
# # print(out)

# output_list = append_data(data,40)
# print(output_list)

# def some_func(*args):
#     print(args)

# some_func(10,20,30,405,60,70)

# def profile(name,age,city,skills):
#     skills_new = ", ".join(skills)
#     print(f'I m {name} my age is {age} from {city} and my skills are {skills_new}')

# profile(name="adarsh",age=25,city="mysore",skills=["football","ps5"])


# def profile(name,age,city="INdia"):
#      print(f'I m {name} my age is {age} from {city}')

# profile("adarsh",26,city="blr")

# def profile(**kwargs):        //in dictionary dt
#     print(kwargs)

# profile(first_name = "Adarsha" , second_name="JK")

# def greet():
#     print(f"Welcome {user}")

# def some_funtion():
#     print(f"This some funtion, welcome {user}")
# user = "Guest"
# greet()
# some_funtion()
# print(user)

# def increment():
#     counter = 200   #local 
#     print(counter)

# def increment():
#     global counter  #global
#     counter = 200
#     print(counter)

# counter = 10  #global
# print(counter)
# increment()
# print(counter)

# def funt():
#     print(a)
#     print(b)
#     print(c)

# a , b , c = 10 , 20, 30

# # funt()
# def f1():
#     global X
#     X = 20
#     print(X)

# def f2():
#     X = 30
#     print(X)

# X = 100

# f1()
# f2()
# print(X)

# def calculate(a,b,operation):
#     if operation == "add":
#         return a + b 
#     if operation == "subtract":
#         return a - b
#     if operation == "multiply":
#         return a * b
#     if operation == "divide":
#         return a / b 
#     return None
# out = calculate(10,5,"subact")
# print(out)

# def is_even(number):
#     return number % 2 == 0
#             return 10 % 2 == 0 0 == 0
# print(is_even(10))
# print(0==0)

# def maximum(a,b):
#     if a > b : return a
#     return b

# print(maximum(2,5))


# def count_vowels(word):
#     count = 0
#     for ch in word.lower():
#         if ch in "aeiou":
#             count += 1
#     return count

# print(count_vowels("python programming"))

# numbers = [10,20,5,30]
# def analyze(numbers):
#     return max(numbers), min(numbers), sum(numbers)

# minimum,maximum,total = analyze(numbers)
# print(minimum,maximum,total)



# def check_server(server):
#     return server.get("status") == "running"

# server = {
#     "name": "web01",
#     "status": "running"
# }
# print(check_server(server))

# def apply_operation(function,value):
#     return function(value)

# def square(x):
#     return x * x

# print(apply_operation(square,5))

# def safe_divide(a,b):
#     if b == 0:
#         return None
#     return a / b

# result = safe_divide(10,90)

# if result is None:
#     print("Cannot divide by zero")

