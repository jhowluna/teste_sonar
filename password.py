import MySQLdb
import config

connection = MySQLdb.connect(
    host=config.HOST,
    user="IT_XXXX_1234_qwerty",  # Nome de usuário fictício
    passwd="av4nBBc%11sce456hjkITbcq23wesdxc",  # Senha fictícia
    db=config.MYDB
)
