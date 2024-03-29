# SOLID Priciples

## Single Responsibility Principle (SRP):

- Each function, class, or module should have only one responsibility or reason to change.
- In JavaScript, you can achieve SRP by ensuring that functions or classes focus on a single task or functionality.
- For example, separate UI manipulation from data processing or networking operations.


## Open/Closed Principle (OCP):

- Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
- In JavaScript, you can use techniques like inheritance, composition, or dependency injection to achieve this principle.
- Favor extending behavior through composition or inheritance over modifying existing code.


## Liskov Substitution Principle (LSP):

- Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
- In JavaScript, this means that derived classes should be able to substitute their base classes seamlessly.
- Ensure that derived classes conform to the contracts (interfaces) established by their base classes.


## Interface Segregation Principle (ISP):

- Clients should not be forced to depend on interfaces they don't use.
- In JavaScript, this principle encourages creating smaller, focused interfaces rather than large, monolithic ones.
- Use techniques like duck typing or creating smaller, more specific interfaces to avoid forcing clients to implement unnecessary methods.


## Dependency Inversion Principle (DIP):

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details; details should depend on abstractions.
- In JavaScript, this often means using dependency injection to pass dependencies into modules or functions rather than hardcoding them.
- Favor injecting dependencies rather than instantiating them directly within a module