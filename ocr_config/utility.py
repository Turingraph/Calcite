import re

def int_from_str(text: str) -> int:
    match = re.search(r'\b\d+\b', text)
    if match:
        return int(match.group())
    raise ValueError("Error: No number found in the input string.")
