PGDMP                           w            sanpham    10.6    10.6     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �            1259    16414    product_info    TABLE     �   CREATE TABLE public.product_info (
    id bigint NOT NULL,
    product_name text,
    product_price bigint NOT NULL,
    image text
);
     DROP TABLE public.product_info;
       public         postgres    false            �            1259    16410    product_info_id_seq    SEQUENCE     |   CREATE SEQUENCE public.product_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.product_info_id_seq;
       public       postgres    false    198            �
           0    0    product_info_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.product_info_id_seq OWNED BY public.product_info.id;
            public       postgres    false    196            �            1259    16412    product_info_product_price_seq    SEQUENCE     �   CREATE SEQUENCE public.product_info_product_price_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.product_info_product_price_seq;
       public       postgres    false    198            �
           0    0    product_info_product_price_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.product_info_product_price_seq OWNED BY public.product_info.product_price;
            public       postgres    false    197            p
           2604    16417    product_info id    DEFAULT     r   ALTER TABLE ONLY public.product_info ALTER COLUMN id SET DEFAULT nextval('public.product_info_id_seq'::regclass);
 >   ALTER TABLE public.product_info ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    196    198            q
           2604    16418    product_info product_price    DEFAULT     �   ALTER TABLE ONLY public.product_info ALTER COLUMN product_price SET DEFAULT nextval('public.product_info_product_price_seq'::regclass);
 I   ALTER TABLE public.product_info ALTER COLUMN product_price DROP DEFAULT;
       public       postgres    false    197    198    198            �
          0    16414    product_info 
   TABLE DATA               N   COPY public.product_info (id, product_name, product_price, image) FROM stdin;
    public       postgres    false    198   X       �
           0    0    product_info_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.product_info_id_seq', 19, true);
            public       postgres    false    196            �
           0    0    product_info_product_price_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.product_info_product_price_seq', 1, false);
            public       postgres    false    197            s
           2606    16423    product_info product_info_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.product_info
    ADD CONSTRAINT product_info_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.product_info DROP CONSTRAINT product_info_pkey;
       public         postgres    false    198            �
   �  x���M��0���W��c,���ۖ�v��@{*��Ǝ��-��N��xvS(�P�2��h�W_�>e��i|��QJ����{OH��9������ʎ0�� #��WC�s+%���E)���-�E��j��cY��S�?��|�A5Aq38��4��ӓ�s��	�6��m��=
`�]P$��.P)�6)��Q�P�2�ݱ�g���s�oC*U���(���
#�h(x�n:�9�΅î��mHSޑDî'�Q���ž�k�j�+w-��_$U9V��m\�+��D�x����'�]�V���O3$��xpB���,�1�o�<��ehOmz�oB�&�lPH��ݢet\��T&�����n�Еǽ��,��.M��^�0�@���L����hc9jI�K��d�k��H'B �K8�"]��P ��z��a�,!�I��v	B�.- �wA����N�b���v��7�ԏ|�Z�Pq     