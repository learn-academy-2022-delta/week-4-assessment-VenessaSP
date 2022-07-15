# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
 #Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd (num1, num2, num3)
    if num1 === 7
        puts "#{num1} is odd"
    elsif num2 === 42
        puts "#{num2} is even"
    elsif num3 === 221
        puts "#{num3} is odd" 
    end
     
end

p even_or_odd

#-------------------- terminal returned: syntax error, unexpected end-of-input, expecting `end', unsure whats going on, troubleshooted and made it worse! : `even_or_odd': wrong number of arguments (given 0, expected 3) (ArgumentError)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

 album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
 album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
 album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

def albums (string)
    string = string.split('')
    string.delete('a','e','i','o','u')
    return string.join('')
  end

p albums 

# ---------------------------- code i'snt pick up the the 'string' and terminal is saying: `albums': wrong number of arguments (given 0, expected 1) (ArgumentError)
# from ruby-challenges.rb:43:in `<main>' 

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(palindrome_tester1, palindrome_tester2, palindrome_tester3)
    if palindrome_tester1 == palindrome_tester1.reverse
        puts "#{palindrome_tester1} is a palindrome"
    elsif palindrome_tester2 == palindrome_tester2.reverse
        puts "#{palindrome_tester2} is not a palindrome"
    elsif palindrome_tester3 == palindrome_tester3.reverse 
        puts "#{palindrome_tester3} is a palindrome"
    end
end

p palindrome? 

#------------------------------------ Terminal: `palindrome?': wrong number of arguments (given 0, expected 3) (ArgumentError) from ruby-challenges.rb:67:in `<main>