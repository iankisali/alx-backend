#!/usr/bin/env python3
"""Basic Dictionary"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """class BasicCache inherits from BaseCaching and is a caching system"""
    def put(self, key, item):
        """assign to dictionary self.cache_data the item value for the key"""
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """return the value in self.cache_data linked to key"""
        return self.cache_data.get(key, None)
