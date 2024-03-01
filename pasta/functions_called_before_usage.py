def noncompliant():
    func()  # Noncompliant
    def func():
        pass

if __name__ == "__main__": 
    noncompliant()
