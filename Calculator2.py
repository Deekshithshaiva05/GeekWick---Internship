class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def subtract(self, a, b):
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result
    
    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def divide(self, a, b):
        if b == 0:
            return "Error: Division by zero"
        result = a / b
        self.history.append(f"{a} / {b} = {result}")
        return result
    
    def power(self, a, b):
        result = a ** b
        self.history.append(f"{a} ^ {b} = {result}")
        return result
    
    def modulo(self, a, b):
        result = a % b
        self.history.append(f"{a} % {b} = {result}")
        return result
    
    def show_history(self):
        if not self.history:
            print("No calculations yet")
        else:
            for item in self.history:
                print(item)
    
    def clear_history(self):
        self.history = []
        print("History cleared")

def advanced_calculator():
    calc = Calculator()
    
    while True:
        print("\n=== Simple Calculator ===")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Power")
        print("6. Modulo")
        print("7. View History")
        print("8. Clear History")
        print("9. Exit")
        
        choice = input("Select operation (1-9): ")
        
        if choice == '9':
            print("Goodbye!")
            break
        
        if choice in ['1', '2', '3', '4', '5', '6']:
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
                
                operations = {
                    '1': calc.add,
                    '2': calc.subtract,
                    '3': calc.multiply,
                    '4': calc.divide,
                    '5': calc.power,
                    '6': calc.modulo
                }
                
                result = operations[choice](num1, num2)
                print(f"Result: {result}")
                
            except ValueError:
                print("Error: Please enter valid numbers")
        
        elif choice == '7':
            calc.show_history()
        
        elif choice == '8':
            calc.clear_history()
        
        else:
            print("Invalid choice")

advanced_calculator()