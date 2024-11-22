# Event-Logging-System
Problem Statement: Event Logging System

<img src="![Screenshot (1936)](https://github.com/user-attachments/assets/a8e957e4-ba67-4472-86e5-f483f2da5a11)" width="500" height="300" />

![Screenshot (1936)](https://github.com/user-attachments/assets/a8e957e4-ba67-4472-86e5-f483f2da5a11)

![Screenshot (1937)](https://github.com/user-attachments/assets/1a798a94-5d98-41e1-923f-e1ea78c2328b) 

Objective: Build a scalable backend system that provides a decentralized, tamper-proof event logging platform for distributed applications.

Features and Requirements

Event Logging API:
Implement a RESTful API to receive event logs from various client applications. You can mimic the events by using a script by randomly selecting the event from a dictionary or set
Each event should include metadata like:

                                                              i.      Event Type

                                                             ii.      Timestamp

                                                           iii.      Source Application ID

                                                           iv.      Data Payload (JSON)

Tamper-Proof Design:
Store event logs in a tamper-proof way.
Use cryptographic hashing to link logs (like a blockchain-inspired chain but lightweight).
Each log should reference the hash of the previous log.
Search and Query:
Allow querying event logs by filters such as timestamp range, event type, and source application.
Implement pagination for large datasets.
Scalability:
Use MongoDB’s sharding and indexing features to handle a high volume of event logs.
Demonstrate horizontal scalability of the API.
Error Handling and Validation:
Implement robust error handling for edge cases such as invalid event data, missing fields, or conflicting hashes.
Validate incoming event logs against a schema.
Optional Challenges (Bonus):
Implement a WebSocket or Server-Sent Events (SSE) connection for real-time log streaming to clients.
Decentralization Simulation:
Implement a system where multiple backend servers can operate in a semi-decentralized mode.
Ensure consistency across servers using a simple consensus mechanism (e.g., leader election or hash verification).
Create a lightweight dashboard to visualize the chain of event logs and any inconsistencies.
 
