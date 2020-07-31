import unittest
from largest_square import largest_square


class LargestSquare(unittest.TestCase):

    def test_1(self):
        matrix = [
            [1, 0, 1, 1, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1]
        ]

        self.assertEqual(largest_square(matrix), 2)

    def test_2(self):
        matrix = [
            [1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1]
        ]

        self.assertEqual(largest_square(matrix), 3)

    def test_3(self):
        matrix = [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1],
            [0, 1, 1, 1, 1]
        ]

        self.assertEqual(largest_square(matrix), 3)

    def test_4(self):
        matrix = [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]
        ]

        self.assertEqual(largest_square(matrix), 4)

    def test_5(self):
        matrix = [
            [0]
        ]

        self.assertEqual(largest_square(matrix), 0)


if __name__ == "__main__":
    unittest.main()
