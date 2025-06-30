"""
Table parsing utilities for Loot Factory.

This module contains parsers for various magic item table formats,
including the official DMG 2024 tables and custom user-defined tables.
"""

from .dmg_parser import DMGTableParser

__all__ = [
    "DMGTableParser",
] 