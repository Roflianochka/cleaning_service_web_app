PGDMP      %                {            Cleaning    16.0    16.0 E                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    18987    Cleaning    DATABASE     ~   CREATE DATABASE "Cleaning" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Cleaning";
                postgres    false            �            1259    19022    Appointments    TABLE     c  CREATE TABLE public."Appointments" (
    appointment_id integer NOT NULL,
    user_id integer,
    service_id integer,
    price integer NOT NULL,
    appointment_datetime timestamp with time zone NOT NULL,
    status character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public."Appointments";
       public         heap    postgres    false            �            1259    19021    Appointments_appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Appointments_appointment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."Appointments_appointment_id_seq";
       public          postgres    false    222                       0    0    Appointments_appointment_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."Appointments_appointment_id_seq" OWNED BY public."Appointments".appointment_id;
          public          postgres    false    221            �            1259    19039 	   Employees    TABLE     7  CREATE TABLE public."Employees" (
    employee_id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    phone character varying(35),
    hourly_rate numeric(10,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Employees";
       public         heap    postgres    false            �            1259    19038    Employees_employee_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Employees_employee_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."Employees_employee_id_seq";
       public          postgres    false    224                       0    0    Employees_employee_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."Employees_employee_id_seq" OWNED BY public."Employees".employee_id;
          public          postgres    false    223            �            1259    19046    PaymentTransactions    TABLE     3  CREATE TABLE public."PaymentTransactions" (
    transaction_id integer NOT NULL,
    customer_id integer,
    appointment_id integer,
    amount numeric(10,2),
    payment_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 )   DROP TABLE public."PaymentTransactions";
       public         heap    postgres    false            �            1259    19045 &   PaymentTransactions_transaction_id_seq    SEQUENCE     �   CREATE SEQUENCE public."PaymentTransactions_transaction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."PaymentTransactions_transaction_id_seq";
       public          postgres    false    226                       0    0 &   PaymentTransactions_transaction_id_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public."PaymentTransactions_transaction_id_seq" OWNED BY public."PaymentTransactions".transaction_id;
          public          postgres    false    225            �            1259    19082    ServiceAssignments    TABLE       CREATE TABLE public."ServiceAssignments" (
    assignment_id integer NOT NULL,
    employee_id integer,
    service_id integer,
    assignment_date timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 (   DROP TABLE public."ServiceAssignments";
       public         heap    postgres    false            �            1259    19081 $   ServiceAssignments_assignment_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ServiceAssignments_assignment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public."ServiceAssignments_assignment_id_seq";
       public          postgres    false    230                       0    0 $   ServiceAssignments_assignment_id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public."ServiceAssignments_assignment_id_seq" OWNED BY public."ServiceAssignments".assignment_id;
          public          postgres    false    229            �            1259    18999    ServiceCategories    TABLE       CREATE TABLE public."ServiceCategories" (
    service_category_id integer NOT NULL,
    category_name character varying(255) NOT NULL,
    category_description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public."ServiceCategories";
       public         heap    postgres    false            �            1259    18998 )   ServiceCategories_service_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ServiceCategories_service_category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 B   DROP SEQUENCE public."ServiceCategories_service_category_id_seq";
       public          postgres    false    218                       0    0 )   ServiceCategories_service_category_id_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."ServiceCategories_service_category_id_seq" OWNED BY public."ServiceCategories".service_category_id;
          public          postgres    false    217            �            1259    19063    ServiceReviews    TABLE     0  CREATE TABLE public."ServiceReviews" (
    review_id integer NOT NULL,
    service_id integer,
    user_id integer,
    rating integer,
    review_text text,
    review_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."ServiceReviews";
       public         heap    postgres    false            �            1259    19062    ServiceReviews_review_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ServiceReviews_review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."ServiceReviews_review_id_seq";
       public          postgres    false    228            	           0    0    ServiceReviews_review_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."ServiceReviews_review_id_seq" OWNED BY public."ServiceReviews".review_id;
          public          postgres    false    227            �            1259    19008    Services    TABLE     y  CREATE TABLE public."Services" (
    service_id integer NOT NULL,
    service_name character varying(50) NOT NULL,
    service_category_id integer,
    image character varying(255),
    price integer NOT NULL,
    description text NOT NULL,
    is_window boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Services";
       public         heap    postgres    false            �            1259    19007    Services_service_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Services_service_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Services_service_id_seq";
       public          postgres    false    220            
           0    0    Services_service_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Services_service_id_seq" OWNED BY public."Services".service_id;
          public          postgres    false    219            �            1259    18989    Users    TABLE     �  CREATE TABLE public."Users" (
    user_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(256) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    18988    Users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Users_user_id_seq";
       public          postgres    false    216                       0    0    Users_user_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Users_user_id_seq" OWNED BY public."Users".user_id;
          public          postgres    false    215            A           2604    19025    Appointments appointment_id    DEFAULT     �   ALTER TABLE ONLY public."Appointments" ALTER COLUMN appointment_id SET DEFAULT nextval('public."Appointments_appointment_id_seq"'::regclass);
 L   ALTER TABLE public."Appointments" ALTER COLUMN appointment_id DROP DEFAULT;
       public          postgres    false    221    222    222            B           2604    19042    Employees employee_id    DEFAULT     �   ALTER TABLE ONLY public."Employees" ALTER COLUMN employee_id SET DEFAULT nextval('public."Employees_employee_id_seq"'::regclass);
 F   ALTER TABLE public."Employees" ALTER COLUMN employee_id DROP DEFAULT;
       public          postgres    false    224    223    224            C           2604    19049 "   PaymentTransactions transaction_id    DEFAULT     �   ALTER TABLE ONLY public."PaymentTransactions" ALTER COLUMN transaction_id SET DEFAULT nextval('public."PaymentTransactions_transaction_id_seq"'::regclass);
 S   ALTER TABLE public."PaymentTransactions" ALTER COLUMN transaction_id DROP DEFAULT;
       public          postgres    false    225    226    226            E           2604    19085     ServiceAssignments assignment_id    DEFAULT     �   ALTER TABLE ONLY public."ServiceAssignments" ALTER COLUMN assignment_id SET DEFAULT nextval('public."ServiceAssignments_assignment_id_seq"'::regclass);
 Q   ALTER TABLE public."ServiceAssignments" ALTER COLUMN assignment_id DROP DEFAULT;
       public          postgres    false    230    229    230            ?           2604    19002 %   ServiceCategories service_category_id    DEFAULT     �   ALTER TABLE ONLY public."ServiceCategories" ALTER COLUMN service_category_id SET DEFAULT nextval('public."ServiceCategories_service_category_id_seq"'::regclass);
 V   ALTER TABLE public."ServiceCategories" ALTER COLUMN service_category_id DROP DEFAULT;
       public          postgres    false    217    218    218            D           2604    19066    ServiceReviews review_id    DEFAULT     �   ALTER TABLE ONLY public."ServiceReviews" ALTER COLUMN review_id SET DEFAULT nextval('public."ServiceReviews_review_id_seq"'::regclass);
 I   ALTER TABLE public."ServiceReviews" ALTER COLUMN review_id DROP DEFAULT;
       public          postgres    false    227    228    228            @           2604    19011    Services service_id    DEFAULT     ~   ALTER TABLE ONLY public."Services" ALTER COLUMN service_id SET DEFAULT nextval('public."Services_service_id_seq"'::regclass);
 D   ALTER TABLE public."Services" ALTER COLUMN service_id DROP DEFAULT;
       public          postgres    false    219    220    220            =           2604    18992    Users user_id    DEFAULT     r   ALTER TABLE ONLY public."Users" ALTER COLUMN user_id SET DEFAULT nextval('public."Users_user_id_seq"'::regclass);
 >   ALTER TABLE public."Users" ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    19022    Appointments 
   TABLE DATA           �   COPY public."Appointments" (appointment_id, user_id, service_id, price, appointment_datetime, status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   _       �          0    19039 	   Employees 
   TABLE DATA           w   COPY public."Employees" (employee_id, first_name, last_name, phone, hourly_rate, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   �_       �          0    19046    PaymentTransactions 
   TABLE DATA           �   COPY public."PaymentTransactions" (transaction_id, customer_id, appointment_id, amount, payment_date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �e       �          0    19082    ServiceAssignments 
   TABLE DATA           �   COPY public."ServiceAssignments" (assignment_id, employee_id, service_id, assignment_date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   �e       �          0    18999    ServiceCategories 
   TABLE DATA           �   COPY public."ServiceCategories" (service_category_id, category_name, category_description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �e       �          0    19063    ServiceReviews 
   TABLE DATA           �   COPY public."ServiceReviews" (review_id, service_id, user_id, rating, review_text, review_date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �f       �          0    19008    Services 
   TABLE DATA           �   COPY public."Services" (service_id, service_name, service_category_id, image, price, description, is_window, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �       �          0    18989    Users 
   TABLE DATA           r   COPY public."Users" (user_id, first_name, last_name, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   b�                  0    0    Appointments_appointment_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."Appointments_appointment_id_seq"', 74, true);
          public          postgres    false    221                       0    0    Employees_employee_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."Employees_employee_id_seq"', 50, true);
          public          postgres    false    223                       0    0 &   PaymentTransactions_transaction_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."PaymentTransactions_transaction_id_seq"', 39, true);
          public          postgres    false    225                       0    0 $   ServiceAssignments_assignment_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public."ServiceAssignments_assignment_id_seq"', 24, true);
          public          postgres    false    229                       0    0 )   ServiceCategories_service_category_id_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."ServiceCategories_service_category_id_seq"', 11, true);
          public          postgres    false    217                       0    0    ServiceReviews_review_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."ServiceReviews_review_id_seq"', 1000, true);
          public          postgres    false    227                       0    0    Services_service_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Services_service_id_seq"', 15, true);
          public          postgres    false    219                       0    0    Users_user_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Users_user_id_seq"', 101, true);
          public          postgres    false    215            M           2606    19027    Appointments Appointments_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_pkey" PRIMARY KEY (appointment_id);
 L   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_pkey";
       public            postgres    false    222            O           2606    19044    Employees Employees_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public."Employees"
    ADD CONSTRAINT "Employees_pkey" PRIMARY KEY (employee_id);
 F   ALTER TABLE ONLY public."Employees" DROP CONSTRAINT "Employees_pkey";
       public            postgres    false    224            Q           2606    19051 ,   PaymentTransactions PaymentTransactions_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public."PaymentTransactions"
    ADD CONSTRAINT "PaymentTransactions_pkey" PRIMARY KEY (transaction_id);
 Z   ALTER TABLE ONLY public."PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_pkey";
       public            postgres    false    226            U           2606    19087 *   ServiceAssignments ServiceAssignments_pkey 
   CONSTRAINT     w   ALTER TABLE ONLY public."ServiceAssignments"
    ADD CONSTRAINT "ServiceAssignments_pkey" PRIMARY KEY (assignment_id);
 X   ALTER TABLE ONLY public."ServiceAssignments" DROP CONSTRAINT "ServiceAssignments_pkey";
       public            postgres    false    230            I           2606    19006 (   ServiceCategories ServiceCategories_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public."ServiceCategories"
    ADD CONSTRAINT "ServiceCategories_pkey" PRIMARY KEY (service_category_id);
 V   ALTER TABLE ONLY public."ServiceCategories" DROP CONSTRAINT "ServiceCategories_pkey";
       public            postgres    false    218            S           2606    19070 "   ServiceReviews ServiceReviews_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."ServiceReviews"
    ADD CONSTRAINT "ServiceReviews_pkey" PRIMARY KEY (review_id);
 P   ALTER TABLE ONLY public."ServiceReviews" DROP CONSTRAINT "ServiceReviews_pkey";
       public            postgres    false    228            K           2606    19015    Services Services_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Services"
    ADD CONSTRAINT "Services_pkey" PRIMARY KEY (service_id);
 D   ALTER TABLE ONLY public."Services" DROP CONSTRAINT "Services_pkey";
       public            postgres    false    220            G           2606    18997    Users Users_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    216            W           2606    19033 )   Appointments Appointments_service_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_service_id_fkey" FOREIGN KEY (service_id) REFERENCES public."Services"(service_id) ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_service_id_fkey";
       public          postgres    false    220    222    4683            X           2606    19028 &   Appointments Appointments_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_user_id_fkey";
       public          postgres    false    4679    216    222            Y           2606    19057 ;   PaymentTransactions PaymentTransactions_appointment_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."PaymentTransactions"
    ADD CONSTRAINT "PaymentTransactions_appointment_id_fkey" FOREIGN KEY (appointment_id) REFERENCES public."Appointments"(appointment_id) ON UPDATE CASCADE ON DELETE CASCADE;
 i   ALTER TABLE ONLY public."PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_appointment_id_fkey";
       public          postgres    false    226    222    4685            Z           2606    19052 8   PaymentTransactions PaymentTransactions_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."PaymentTransactions"
    ADD CONSTRAINT "PaymentTransactions_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES public."Users"(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_customer_id_fkey";
       public          postgres    false    226    4679    216            ]           2606    19088 6   ServiceAssignments ServiceAssignments_employee_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ServiceAssignments"
    ADD CONSTRAINT "ServiceAssignments_employee_id_fkey" FOREIGN KEY (employee_id) REFERENCES public."Employees"(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."ServiceAssignments" DROP CONSTRAINT "ServiceAssignments_employee_id_fkey";
       public          postgres    false    224    4687    230            ^           2606    19093 5   ServiceAssignments ServiceAssignments_service_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ServiceAssignments"
    ADD CONSTRAINT "ServiceAssignments_service_id_fkey" FOREIGN KEY (service_id) REFERENCES public."Services"(service_id) ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."ServiceAssignments" DROP CONSTRAINT "ServiceAssignments_service_id_fkey";
       public          postgres    false    230    220    4683            [           2606    19071 -   ServiceReviews ServiceReviews_service_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ServiceReviews"
    ADD CONSTRAINT "ServiceReviews_service_id_fkey" FOREIGN KEY (service_id) REFERENCES public."Services"(service_id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."ServiceReviews" DROP CONSTRAINT "ServiceReviews_service_id_fkey";
       public          postgres    false    4683    220    228            \           2606    19076 *   ServiceReviews ServiceReviews_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ServiceReviews"
    ADD CONSTRAINT "ServiceReviews_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."ServiceReviews" DROP CONSTRAINT "ServiceReviews_user_id_fkey";
       public          postgres    false    216    228    4679            V           2606    19016 *   Services Services_service_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Services"
    ADD CONSTRAINT "Services_service_category_id_fkey" FOREIGN KEY (service_category_id) REFERENCES public."ServiceCategories"(service_category_id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."Services" DROP CONSTRAINT "Services_service_category_id_fkey";
       public          postgres    false    4681    218    220            �      x������ � �      �   �  x��X�n�H<��b�����x� �� 6������E�"RN(���N�90!������U��b:m��9�������Z{]Xg$I]�@RHU�,��K�K�_2��{���P���t��]��e�UC'���_8�nRAҔ^N�X�i��+E��*�۶ަ������V�AZI[�e���>�b.��6u�/dЅ���2).�^�b�ծ��C{�����N=	��fWh'
f+�`�u�E�Sݙ�f鼊M�7�>=�R��JV��fC,�0���D��t��u��tVǪ�V��BK�o�./�t���ґ��5�8-
ϡ �1z/:��§tH]>>The�`�_��
�L����qЪ��J-p�ғݞ{<�E�l{�q�iRU�����FR��Hz����D�Pmvmݓ��ޔl����9%�(z�G�B"U�rbeX+�h�����t���O��:>���l_Z����p�� �46��/��{�<��6uMl��I�a�@�����LdQ�	��d��*:�]�l,�h
e�&mK1��<�(�W�P�؛��2��1�B�A��9��Խ���;���.�Ù)_5��J�0z���#��;]��:6(ҕ�(0؅�R��^K��3�~��6�<�:7���,&MG)jJ5�`��	C���v�����fc�`��Fm�,��t�K����i��'g%�.���b`����,�0E�0��r��MC$�5�e0F��N���M5]��1ߒ�2�'�i|I�~{H=���_U�}��P���:��Š��`�D���l�E�ߤ�0*P� �����㪴)��Q��L=?]��O�4T=��мl�%|n���N�t]��FD�/�qi6X/sr9jMF����F��"����&�5)�s�����C&�=G	:K�P�G�R9�W>�`�7�l����1�d�1�[%PA���.k��������KUב^ �"Y�l�"ڗzʕf" ��=�J���4)�cZ`�#u�2Lę(�>�}B���ێHyE�AQK/��%A/�����<~���!�L.'� �熟X�bٟ�\�}O>dA+P��AP�;5��4�����\K�D��`[H%,�
w���!�)���>]�[}�{��"�w7�ȊXꧺ? 2�\awk�"�b��>���ƙ<6&W�9 �6���G~w*۟(�Vvp9��v�`:��MGs�	k�@��6�Ua 6ux�Q�[��J9DO]�"P�qM_B'��[A�t�L��آ�v��I�� �]B(���;�8	���ɴT�1�g	��aQ��pȯ:�H��1;`>;���8��{��:�+�ᘫ������ءe�=�~���o6��+�7���6�7ܔ1A�EM�g����>{�_{/��nwҡtS��	2.�hu��MOΞg�W�aiA^����I�A���M���t�N�F�ʺ�l�c2�σ��\�V���"      �      x������ � �      �      x������ � �      �   �   x��P[
�0�NN��$�bӳx�"~(xD���b�m����(�/aaٙafX'�B��&�i�(�5r%�y��g]���hP)J/Q�N��=(��a�ؾuJ�،x���z:�BI�֔����s����� j�1�NIc�W[���ħ�h�X���/9�޾C�.%uky1J=����Q��5�R�3�0�      �      x��}[s�֒�3�+��UT��ԛ|K2�{lM\S��I� �@�<�~z����<5b��jΜ�X��}���իg�Ao0��N{���mUd�r�-�'y��*~dI��e�,�r���6�I�h�6�wI��K��l�L�mZ~O�:�'�j�O��M�\���6��┬��Β�=�N�>��|��_l�]U�y�I�����ѯ����d0�N�Ɠ���?����nx{7݌F��h��_�e�b�C��ޫC^��E&�1K�Y�ٶɪ>ln���.�-�Z>Y�&E�=+N7��?��懕e��ΰ�U��?�IU��[��~J�,-n���,Nv��_s�|ț&IաM���_�Ǵ]n�ա�uۢ��y2��F��/z�EOf��wU���uV6Y��˔'�;4�RV�#�Wwղ�?_�$o�MR�[��:[���6m^r�鏬H���(���N�P���}U�7��1��=V�'���Tv�:�u0N�����n��B�X���>�Wu�����T�����K�%�,�ʍ��y,�z)+x���UQdrd۴X'�|ɵ}+;�O�Ϝ�,���Ȳ�(��a��}����>K�琷����S�5ק��Z���ٯ�ۤ?���Z'���7����"{/K)匚&�_���,��c˫��	��J�E�CZ|OV�\�5���?�m+��E�
�Gy����m��y������?�&��?�����?��&��/k�#����gG��c��	IVi�]N�X�Y-�H�}����d�0;U�7����m,򶵇��V��/m%�S�(����ڹ���:%���hr7�=�|r#��o2y*���ģ�v̛mr�V7�oY���k�G���T�G������>P����yҟ�M�w����Ѱ7�=l�7[ئF>s-�W���{Ý��I���vYZ�#��->�݆o��2�{��b��du)�Y��"K�U^�$lq}����E�����Z~��E�bN���}���j��m2y���uvc��o�&��?���`�Ӛa���t�Z�i���氓OZ�s�;SpzLbN��z_��4{Z?��{��|�0<�lcs�仾�bx�dQ���d���Y��lV��Ĕ&r�����?咬�D����m��2XN�E��ۻ�������.nN��<�樟Z�9��:���'V-.A��ؤ��l��=�ډÓp`�~���w�L��fyô�#~+�[����[�c��})�3G8J����w����/�ҿ��l��*�rο�����]�|41ub�i�}��x���짘�Z=eZVv\_�/�s��jy�W�1���L��W� �T��/�{����[\����dY�OI�M��g�<9�]�ɻh�:�2�BG㋱�|>��/�ވɝ�Fs�X���%X�,�����%�y�Y4j4«T�F�}�x�X�V�C4��ܦ96�l����Ȗ��A�E��:�Ɛ`x��^��!����a��K#���NJ��[<��&y�U$���$�y	�$� _���Av&x0CP:���+��3��#�o��b[X�T��-p�F\�M��ѥY����:u��ŷ�I��xBX�&�{� t�ǸO���C��b�y��9x��Y�ǈCŽ?�c���V<�{��T�I��^�d9�O�'7���^lb��-�Q�)H`)k.�����6+��o�E��?�F3?���y��Z�bd��Ht�~Y��������<mX����O{��'X>�O&��L�e��Q����<�}�6ߓ�<~�v40��FM�.Å�"�ۊ���y]�8g��}!+J�DżJh�9%�> �����"�H�d�w	Ŧi���×��ěu�����7�2��ݝN�)�����w���-���T>t�B/A%����e{��l%6��G����Vh��	�D�i�?e��}�1��xr׿�6���t��|����T�`
y��/'���6�8�b��4�2b(D��i3o���0G>�1�I��C��O
7�SgA�H��س9��"[�fk�P]�-IB���?�}�\k,�=�=DeZ2��~��0�ɕ�}u�GVw�d4-%�W�!ѤW]n%IS1�'�W)�7�}�*���IO�~���nBV�4��Y_���h��x�f��o|gZ4�*f�m�ʳZ YS�VDQ̙�L8�O�^�-Z6x��~�/$L�D�Z�]�5&L K^�(�ډa��	1�#Ie!�.0��j�*��erz�I� y~~��3K'Q�,ކM�xp��������ac���� ��l�:��g�@=�������ٽ��ev����h�Q�П&	$�w�܃� bc�)�'�j#����]��0��6#��\<�-�E�m�+�8Q.��;�=;Y��}J�k�g�r�9�V��	�D������H�-g�)H���� 
��n<��b�ƽ�J�3	K��Ӎ������X(1�m@��[	d$z��B>",�>�(s����,��\J���D�H�?�%����P{���n���83��t�O�D;��*q]U�#M��M�k����&}�da�ԕ����-^\>J�1N��&�mʂ�%°�du{9��^�O�U�D*-�P�u-�Gb����� $n��/f>�a�rL������s�!��T��gY���>�#���F�J�F<|������$W��$�5Gä3Au�����xf�|@�����w�)/�y�8qɕpK�� Eȁw�����3\�S�'�Y��v�×��oqX!�w����ڥ��CWԜ�R���b��d�%�en�o�V����4@��Z�+�k�����,��.7w{~��
�O��J�Գ�hX$Ά��;N��ۈ�{�2��Mr)���SL��X�o}2� �M��0�+YWE!��!�m&�� ���6�P��i	G=!92&f����<ޛ� <!��^Vǂ�� 3\��:�@"^q��s#���I�gһ_�4,ӝX�M)��_���m*�!;�Űc����L�k��X���K_��d��J.�أ���[NDJ�ˆÇA�H�z�n`;b $9�I�\��
&��Ǳ!�����!��,Y�d�-q}���|ӺHkM|O��`�k�����'z*X��bl�ZL�'� �4/�wc��@�k�o/�)�"h#A�2�=F3����4�jq]7p�z��/@�Z�'�$`����rDtA"^��we��N�Yò��ϙ�y�$��$�Z�_������b>J��w�ǣ���`hX��Ͷu�fQ�𑙯 �J>�ʋ���/��6 �edC��(�	CG�I��������:5yyf3��?��:":���*3�ɥ*���&N%+���ζ�h����f�K�>���M�T����|B��Z�� QEѥ���Wbi���;�qer/���P���K�"��=_��@:)�V�O��E��� $�D��9�zWbNo�U<l��1E\W��,Aɻ ����������;f6ǭFr�:�L�����p�z�|���-9�p����/�1W/���(���5`'
���c�]��)�R�k%���������>�Y�h���]���r��x�+>�?.���q������xj[Z �hWxm�)��61��ͼԽ;�V��%���T�c���<%���R?
�j���And�=�-��J��h5�߿T˹z�L"R,�*�mB�Еq$�j-($�b��^֮D x�/æd����H�b�B
�xs���H��2{������jbI���ّQ4U�T�a�������*�s�H���jt�*�ފ�)���h��U�<�I�a��Z�Cs}&fM�f��z�������	^�Mc�
O�Ďx%R�0�f�\��g��sl�X�X�9#��lɟ�כ�z��X&Tg;�_�5���b�e��b�J��AX�7��J��'=!��*�}���ģ����U����^�a�;P��m��7r�I�.A}+�<�ۉG��W P�V	�@q
A�4�b��S�JA9�aR���'�W�� ;p+�]��DC����"E��F��C�s�:~ĢH0_��i���]�L4�#bTQ�%���r[U    �:$_k0��?߽�Y��{%�!!&��8��5[��	J��z �(z�g^\�'��c�C�o�=�ې@ I&b~�×���ՙǽ/�e,pÓ#5�@Jb}���,�m�7����!,���X�c����l:*� �v�l�1�&N�Ds��[	'��k%�!����M�j��=ÚE&�_� x,Tr�����<#i�ju�;������&�"%��'I�u->~+!gA����������aШ�=bQ́��w�0G��Ȏ>H"����u �~��V�<H���Ukxiq�iM���۟����"`/���;R0ӌ�K��M O�䈟����|��OJڧ�$�}PJ̉��BuU0�g4�7���Bk�-	��LX����Z*@��S�b�x �Ĥjf�8��3�ݰ��^ ��^*A��.�1NxE�l̍�?\`��45i�I�0�W��e0���2;I �ez������=]�rhUSn����`��׹\f1�!>�71�M/��^���s�L���E֒��Er��~2�b����IbYk^O�!��<�#��Yd��r��K�LP��(2H`zḧ́�4e^���(R����[�/E���_f�@��"�i�]f�)9�3�<+K�!߫+%]ஷ� �����V�P�J��� �*ɳf�;�R�j?g�O�B�>�����1=5Q=�{�C\�b����`h1[꯴80Khۓ���8�^�R���r��,���O���~���"�»VJ����iN�s6K�$��T�G��;�zq,fp��%<[[x+���Z�X��<����r���U<Ɂ�%��#��[FͰvt�y�4�oD8����`WDԥ#���>�2&ËHεkgx2�"<Qv��
:*������z�q��ѩ=���5+fg�p��;�`j���c����6�p-�N/��10��;;.*J��!:Ԛ{!QA BXU�1 ��:�=" ݕ$�'��&�ʵ���ܗ7uO�(8H��.��%z,�Dj�0R{X)	����7��RS�Zk���h�r��tѻݡę�+�+T��<��B;��L��W�4o�m^Fq�Y��%b����q0�O������d�������1����� ���.=-HH�t���Z�[���Ŀ%9��10% W�A�w���"��e6Ǩ���!��v�lF@V?���j�κ�����\6j�R$�x�!!�f���+C9nS����[ξ�QY�\���RY��%�X7���{�E�b�+��#_���B�X{��F�ÁR�U�K,(FT!�
�ՊNU\�J�C/1�����o�A
��E2f��$��LVQJ�C���K�-�+Ւ�b���v�Eq�s���qy�8zQ����g?�_��>� *�M}���l��+�vE�&��a�E�C'��D���X��ϽZ2-�/Ĵ�sxQ��+��P��Q�s{�ll���v��g(�i�M�8� ��c��_5yѷ�6_�V��,Elka�Z+�n5�j]_p�ޤb�bT����l:����X��x������n`����)ZH�{���N��Zt�q��7c�unI#�j�'I3i���E�K�u�����1�v*/��y���$c���E�*)�l�
5ᨸCf�h~��՚��5��;K_n��{q��/�f�����z8S&3uf�=Y��C�0s0Z�WvE� �o	~L%
�#�w1x�6[g�������@���F.h�U�]t4:kM����|UYJ��j@�	ԫ
�o�y�\�U{�ǭ�l����qsɴ�1����FA�RVD��t��N B������b"�Q�|�	K��gD��:��d��Qeع�W��z�ug	/�r��$����S���T�v���8�����]LD8�@�l�UMk&���)3V���.5�_ U,�U(�6�t���SȾ?�m�M���j�E@��m �	$��;X�}.7ܓwe<�)�5r9RP���@���� �@_��Ζ��I6�!¥���k�K�ϲ�9���L�E:�tE��ƛп@1kϜ\��\�;
���}���nxf�=��a])��C�*~���.1�@G�����Vo�6q�!Ao@���a@��us�-�g˄�Vتg�;`��:��Q��cJZ�Sk��!�2 �m��P����<tw�x ��
���ʬ{J�`���(���=	�mh�j��t�Y�S�E����-�1��=++*�o=��`�<8�M�>ҏ��W����D�(A,OQ�����9����p
���ڨ�f۾u��~��ֽ�Y��+V����}Uv�)�f�h�P�>��G��(Z��b��9s���_[�b#4��Jv�(��\�ٱ�FDwB7	z�ѐ���l=w���g�Z3I%x�Wo	��	��?��	�r#�ŌX�� �����@hcԀk���^�����V6~Þ�doB �&��;�|�ҕ؅2F^��#Xd�m���3��EvhR�/4\�/Z[Z�X��V�(U�X��U5��b���YiWaE� ~$�MR6�~�E)I޷�FC8>�c)�������C4�����6�z_zjf{�G���1y��Q�
�br�K�]A�$�R�c56ӊ1���7�����x��U3d3Q�EǙa�9�2`z��eo�Q���ۋ��k7»'�?v�;!A��L�n%�¾Y�&�����#Z�֫9j��DW攪�_j|���O��Zv
���N?��cz���@�j��j��Y%�L2<V ���N�M���U� Uy�x9\����$K��m:֚&�lC��m 8���e�k����l���W��ء���_��i��+Co��`]i�!�S@@̚a)�PN1{ȓW�/�Q������%.:�3�D��;vG�,d�cf��Q��Cc�]䩒h
���o-Q6TӪd��"���#c�سg�㫧Z�!S?���}G�)�׮�`�p�"����1T~U?�=Q�U�L�RY�Z�*B29�e�R�8+����=�w��*2��Z{���_���}D?�Ԋ(ު��2#����|F���(�4؉�R��ڜ�)g��D��V��^Z�Lo�n)(���o��Zqv9� ?��8TCt"�JZ+]�����v�B���{2v���!�W���pd�4�"�z{P�"���R�R��V0�W:�I=�֊b%"��mIH�:��`jx~�<#�8��-~2+�6x����H�UX��nVɔ?�t�7�Rd ��^׃C׈[9���¼���D�3�
/p�#bF=GIl�QH;+p��w��ѣ�<
����C���yp�G�t��sK�lA�F�Ӕ���e8H���4��̓�j7ʭ�Ũe�ٳ䐓�T� �'���t���	 �7ҟ����v��!��^�3j�ZSW�
E��~J\��,b#�tG�8��#P�X/nO�s;����(��m�0=�w�X%�v�}x�k���pKXzc2�U�E*`܈�Q����2��v�XIF>J���ڵ�_�����l���*��*0��ʇ��v�Bx��	��ϩ�p2x$�j���E<��Q�X��G�Pſv}��}��v�X`�`�J��9��c�����z5͋�b�R(�q�����#;�2��B�7�4|�;ܫ����nx!j]DF����~�w�+�z��&�O!Hwk���-U�N��A#�"g��I��B����4mC�꿕.�g�+�I�����J�19j(�\�!\����Q�4����ܛ4&Z1BC�s��U�B,0򬨹4��hm��^���6=6�iD2�j�"�qVK?�5�]��\眐�Ls��@�HP] G��,/��l���Ca��7��E6y	�U��!�+����
:�����!MNci&�]���m�4��ބ�5��zxzRV�7+�r�q�m��$rS��.�(<��������Z��F��<� c�|�k���(z��O^��ϕ�g�~S�޼���g��`*.����^6ׂo��1���z���rԵ���,>(�V���P�h[�@�@�[B��+�V������K��t    �V��\�GJ�����u׮OմF����
�_{�g���)�]�%X��q�'%&��"���_��D�veF���w�*LC�T��Jq�ך�9�O�F��h�x�U��&/peU"U��ywm.łi���6���6\���0�����n\Oo�?)�C�!i�ze�iAJӃ��q1l&�N��_���݉�1�&��9[Yل��MZ���Od�N(�?����VH�d]GZ�L�(˕�C\��ȴ�@����a P���#婪C������Y9
Qr]!�e��@ NW&�B���fh�6iW�@�����#�|�j���E������rg�w=�hp~#��{���n�:X$���Oǋt]\Hv�O�q�;T�N��:�c������o䍷-���ع6���"<��Xz���?�y%.3F��#JS��l�f�4P|�u�\�#4]a,f~�_�%(�Ϊ5�-"J��(�����>��OXlC��ޘ���D&X�OfE�P!�%(�BH@��N�%ė���8�ku�A�tKj���VϪ��b�aӷk=�L]����i?(B�qh���ϔG��R8ZO���$�����xױ����3���d�;��y����M��nƃ�`�'	�We1C�xb�z����|<`-�b���+d�P�)�v\@#�Hm��3���&�O��FD@|FR������r}��Ih��)~Һ%�Begس$Wn/"��G{WP�#�E'��H3��>P��puo���y�}��X���Cп2�����BZ�R#�=V�}���C��+BJ�Fc=�$�����S��5�<P=Ī9���q���>p1�Ԫא�d{�<T�_|EN�M�G_�	ģ�����p����Ί˿��=��y7�KK�y`����1$�_�@�x�3̱xO��PS�(�-�W�@��A	���&�@��N+	dP�vI>��Fi��:���S�.R�R\
ԥNv��R���p�ܤ�-�A��%�k�G|����]�ŉr�Tx��w��Q[���=�(xl����H5�l��
X�������A���l��j��C��*��Ou�m�D�2�'P���B�vb��2d��.�!Ķ�����Jz;���,�2����J1O M�ڳ�#�Gl��j`�m��
���/LP�M!"�B���6�q���� P�>�6�m\ܤAؤ9-���uF�Di��~���4Aϑee]�D.^~e�l�Q�/`�LV�R# ���_�VQ�y\�_c�"����5�����z��@�Uz��X��GG��0Q�@6-J�e��_Z��4xBgR(���GS�������[��a�,��_�68����Y,>��D����v�&1웡��#�)A �JQ�o��^S��h踋y��^�G)]�{g)?�c�vb�g"S�Cy(|=d����'�Ƌd~x��`'�Y�z�`r� 9$��\(�[���+�.L0}y�ˡc�qa?�b�Vt��3�߲ �n�P�VH�	���2z�@���3l���x�� �h���Y�����h(�C)���Ij��VR5�XD�k����u����u��,x�6�"��}"�H��;�y��9�f����իr�Rε�Lb�/�=1:�2�%����g�e�S�Z4CZ���H?sC�<�;����0����Ng�Os�?ʕX62��#��`�5n�/B���6Z%J�ǹP>�/�aI��99u^�?Ei�#��x�p�����2�͕�s��JV�1�rB�F[�P�6��4���7�.WOՒ�:��w0��]ʨQ��?�1�9
���4Y��Ϙ�S�}�V0���r��[k�{�r�@Dt@ ���1SQ_��U�;�"����&vy�&�&C\�5m�$����
9�bT�=V�M2u��d�S6d��G,�{���X
6���J�~1*�d�l��@�.�\�D�|�t���1�U�i+mVt.}p��p�ٍ�]\�(���gN]XU�0#ů����Y�k?F{���ss	9���+p�V��-�ýWa����F2���?��k4�Btm�� �1�&�	s�=��3��
S�^��~e`y�S���$���+��x�;�(&�����V)����K�XeZuN��8��)����22ݭ��+�6*a����O�s=(��V�-Qh���_i�Zf:x�u$3𳺋�~m�R�����i��Lv�*]Pd�9�Q#ar�y��S�(�@�5��s�fw��E2�9D�3��]��14$yJ}R�[t��?�~��Y� !� rƄ(�w6�t#:�wT¸�R���"�f]����r���hꣽ7�k̒$�Ny�3�ny�Z�L1_���!�ѱl�b(���|���pN4	�6w���l�}�v���z�1:'D���Q��RE�3s���κ�Rk/�Ŧt��1�/#\N1�=���C����P��!5k��1�k�8\z�J�A�F��ĉ���4~W�^���CF��O�WN2Zw�)fY��ס�l鴹}&I��̜����i��K�yC���+��^�8�I�4����J�d���kh�����k��J�XD��l%��<������@��6ڤ��ja��8�Y-T�+Dɣ��=*�����(y@���)��z�j�WԴp��"��i����;�  ��N���`ǭs���c�ހw
��y�-)�ƦY��CFȷ��[�d�5�|��f;Gq��r��P<D�D'�j	6/S��T��P|2yLȈ�rxqð"�3�+Ht�4��(R�p٫69��(�g@���P�Ϣ	m�7�L��i�Pí��:L��f�����"]pǖ�����'-�X(R�ރ��\ւs"$�
�%�z����J���7�n���BŬ�K$�ʼ��rZ12��Y�ƚ_0�Kb&<a�������}����XZ#!Ӊ���[~yǰ�&�����j^ 
��`u0�B�tZT�#��:���������!6�� V"�����g�g��.��k7�A�	_��h�*"�FNks�4P��jm�աW@h�C��]{yg�R���Aw����V��@��C��Vy7Z;5IZel�S����R֞�-Cl�t�����D�T�)���w���4��P�!�K&�u���*s6��99����:�٘a���I����ȿ5�+ё^��*��c;��a�.Ѧ�GjBQh�7��4E��M۱8�B��ʃ�|�F�QQ$�	�,,q総��<i͌�Ʒ�)W0*�9!�*�[��[��|�9A���2D!lkҔ��b$���㲋%�!��.����!��O��Ӎ��4l*6ieP�C>)O1�5�{^��� C&ɥ.�pF�yV:UYa�u�я�a.��k�0e��i��~����<�U�Zyo����9��EYaeL��YI�����<�5�h�D�9����E��%���X��2hx1y��*��bgP��0U�J	�.��p(ᱴ��5��)�+���tN�����A�Xqkn��K��
O#�U@�~�WK�����]�G<�,K�Z�=�&��<I�ݙeW�q=�=���fE���*V�E�@��_��]�\A�A�3T��BD3R��5&��3d�9lĖ3	B�/��;���PhSc��,�xF��z螲N@ �n���a�*�����~1h�#��k����!����A$2�#�h�2�Ǉ�����'-�q�m�d��=��3c�L���=O��E#�h:Zb���EM�"v��s��S���D_M�å����at �r��#5���z�c�R=D������
ֻ9�$�y]Ō�!�H�{��0�{W�0�Ǖ|��3Bsfq<.a^v�xOf�)�D��tƔ �(������A��	�O����M��G�\�	����r��U�
�N��d�w��n*�8��;�Q(��n��m8���w�E�<&A�8��<Ш67�g��G�E��׌�4_4�$��1�ʚ�u7.�����@��(-GJr�a����D�aܹ�C�����e e  g����y4~J#�6{� �j���R��a��tiS�>7�h�w&ۺe�f�j�����t`=iUg���>���p��6������nʨ9����K��Z��W`��K�j�����n)�-�h:��#����5�Ž�^]Y`n�㔽�tb�?$b`�����E]���Gr���������i�:��a��-L��+�u�Z4�CS�:��}?��F�eF����k׮Xg�[�Z9|oҢ6���3dv��{�2�;��|J��+�3�LN�ߺ\Ɯ���Е�K�X��Qª�K��xP$��Q3�� �ģn���<�a�������~�&mى�*й��9�=���\����*/�q�^� ��"�[A�ܜ�[�Kdܲg�UV����� uc�B?�K�Wo9l�㡵�B�s%�I�>O<�}d�Ɠ�0i8W����� ^�TEm��X��Ư�k��!�R)��}�b|�@6�Qǣ��<iU���j��v�VN�P SSfUrY��r>����S�9�#~ǎ3꟰���x����N^�Ȉ��9J�]Ch;��<����)���P��da���;��  u�R�xVP9`O
 
�Y�?n�� �\�-�I���<��}$���[�An���\�'N栯��5�?�]g����Q�HǥP��2�� ��#�b�6�9�*���+K������	j��~��j� �G�> �t�P0x��b��XA���}�yQ��8&{���K�tz.6b7�a%Vs��{�"]\<1�RM�p��/������/
h�"��_lF|�|�Z0�5���)f�$4[��Z�bP��m��s������I��
3�I��H	�Z8+�� 6y����E;�N�b\Չ�hu֣�����ы<�)��۩�ڥ�Fe� 7R'���?�6��n-��[��d8��P�y���Y�*��i�)ջd~ a0L:�ǁ_�T��&?�C�ڻ��������Q�t�\��j��+ulK����1�{TV�H��aiuq�?��3��.N*��I�X8DIM�X��Жgui+d9�h3vU�,�����ѣ��Oڔ��rǽw��F0�M�����dwCƦV(@�	c�-�a�]x�����͆S|�K$�kWE|e��fV��ʜӸW'�+9ᔠ^Hx\�1�0�]�vڴc�=�T��1��
o�+4�/O��H_�LU�!���Ebܵ�lP��0[Reԧ:jm���M��D���h�삱a�ڶ�2���5�����'%4����L�B@����9�[��V�7�����z�T�)kS�s� �JU��$c���\ �]%BY6-��B]�G'm�{��j��{�_3E�^:՟ݍ'�M\�е��ޚ�	ޟ��V�έ�y���%�a�-3DI�lc�llf�O�jm���zOU~�P4[ՂC�����\�k�(L�����jS`g��A^�lޜ�>﨩�JBj
	�����t~���$��R�,��x@�DUe�����n��?��5��1�;����c��,P���ZP5@gDl8�rӉ5��9��t�{U���N�'���h����0E�jb����q�����S^ٿ|v�wFr���\�>����E�����ʶh�H��]2�̈n]���ă�h�/���.+ ���,�L��AQ�붸I>9�-"�����j�(�k�V�sX�ht7� ^��۾5�zo04hi��ۢ�ɦ �w�����t~c�Sb��K��k?�r�����S�`����v�S�:����;�VDz��	t��|�`"�\�A�5���>���3��v�S{�/c
����z��6%�3]�5�I�h����^ɏ�?���cQ|I��<E\6*��(i��5�B]T�L���N83	դ����|`��%����䱍��\�K:G`�c`�h=х���(��:Y�&�s�΄�B��4IK��?^�!�N{̢������a�f"@��3��/X�kw@Y��Ri*�bMT��"��X�0 �P��~�Nt4J��PF�#5h�C����%���Q�\���<� ���)m7}l\�6�gpcx�˓I^EF4��*c;���NW�M|�������:�0[��ߙ9L�v�o�D`>d�(� �D��[e�]����JW1�[(g�\�͡� �%nD#JZ'��5ȏ+����A��9\��"����}0qƗ�]���*�T�:�6S]� 8�6t�.����9@��Z7'ݖ���#J"D����Zal�0L�'MQ|�xy:
����W�Bw=���_#�/Ύ�ٷ�k��h�:��9\�Z��N�+(�k��B��Fei���F�B��pV�f�F?��nDu�"�A��a6N� ��5��򓷻��_V���C�sLn��;qSq���󝦹�nJ
b����h>� ϣ�n�(�Fu2�.w�%�].y]�#3�n���qx\�J����XN�ҝl�/6��w#���s���>����̍tP��s�?� �a��!���1�Ou��1����ٲ����꛵�C��ܥ�Yh
��e����TAK��}��~(�i.[�&[S�-�Z&`�����) �
X5(9ŕ�3��a��̆.\G�Z����F4*�������P�Q�F�S�^��M�}�]�{6�zD�w����aePg�mt�Ӧ��A��)ʴc�s0���2�[���^�ӆv���N0Hs܈�8��OAi=k�>��~N���c��c+=�~Xu׺t�߼޲��R��`����5�zKJvo���ZX�*Y<t[�OφJ��Dk�`�Mb��RIV46=Dg�t�n�aN�ǆ(>i#��/H�~0�q�bd��:��hc�B�oT�����с�2d���"��+	c�/��Q�i�B���]�4d�>�0��9�*�)����� ]�He�:� �NJ��B:�1��h��s�*Gq}�+����c���8�Uz��띺�*� ��JTA>m�m��j�ր�~��S�,�>�1]��n��4��U��"-x"{�Ij^L
mp�p4inc��X ֱV�w���r���V��7}�cܝ�<6�F��&�g=d�7�H�\�'�3�����q"STq��^Gf�+���B��]a�oo��U~ zo}��������־��|��`��c]G��&=ӆ2�v�<��'`��e�!�͚#��sٰ>ue.��kW»8ư�χn�Y�s"Á��G�H��`�l��c)���%S
X:�V�b���Rt$b��2�_4׮jh}c�ާBѩ�c?�(�}���9��$��aש�r3�������d�b���'AղU<�ӥ��fW��]�0}�Zk�>*Ӥ���EN��_L���m�����kC��6c�F������%�ѼQ�3�lf?vI���8��ҶOv�v�Fd60ݕ̣A�떽c���1G�TڎMXN�!:f��
=��GWE]�j�~����X2`�������A����@w����p���E�%\���Z��F�+#6��/��\��5(�x� �Y��:��M�aD[m׎�P��-�۴j4U���Z���=�%�l䱌�����|��9�D]�*��B���e*O���9��n��r	��voX}�co���R/xϒ,1*�.���8�j�F���#�q�ŲW�y�`�ޅ
�B(w�>��P�&xԖ���lƑN\��uO���UY�̲�I�
�����w�-~�*��0 �
'���t8�ǆ�a��Hn]u�n�&��kW47m�A��0�;A�.�c�,4��r��0.�Z�G<W���*6��M���Xc`g��9�
�8�K]�����W����7(�V�Euˎ�5ڟw�X�ؘhİW@և���m�i������L�_�b�nU�n~������      �   ?  x�}��J�@�ϻO�wi��M���x�"H��4�&�Fz�O�#�}�V,���+̾��4�j��Ò�a�|3 �� MG�n`:I�D�,v"s�}1P_��N��wX������J�@�T d*IǑ�:������8������/b�_T[��m
�צ�A�(⠉�����>>�dM�{A�pa���S\ӽ.�$jg���S�B�hyހ=�8��jlLVq{�`w&����7A'����{:[/����zqjy���8!ߑ��C��0�\��*��T������r��r��L���@���5|��Z;ߑM[8$���� X#�P      �   "  x��Z�n�J��n�bG�-�`�� !%j��6��������y��H#�朇X�FSmHv:[�A'�ɺ�V�|��_}U�"�ۄ�.������2�s򊽕K~55��x��T+�Z�wu�$A��$J���H�oB�7Q�USQ�ʂ��5'��x8Dm�9n�("���R}���Οg�Rs�oS1U�"�y����0"+�I�W��G�^T9��Mu���4�
��8f�$���v��p���9���x)��;� WA�l�; ��^Q�ŮK|�(��ފ^�Ct?������FE�{ �&%[My��I��*�r�������FM����� فO������T�>f]�]H�$��"s븮���K!������}��Aj��~y����8����~@9�a���]�J͝�ED�:a�`��]���˨�����O=�#1E� 8�ƘR�#b:���T=i,�/�E�˂��j�( Rǲ#��XS9��<����H�̀��nqDc�.\X��	=L#�W�r%��u��:�
�:�c7�-d`��O�ЀW���~}=4�|jd���z����Pԃ��u�x6a�0K��jGE�VJ�y$��:d�%['��$�'�Y]���ަ�~� �Ƿ@��m4B�r�U�c(��E���d�Y�p�����+���2�h^ކ��z�|�g ���� ���8��ͱ4�%�{r�2��A�^���5'	h�=/����&:�q�řʓM���G"��>;�@�b����8)x
ZM{��Xˀ��~��T�4������|3q�pQgAS~?�њ�p+�E`��Y����8x�b,���([.��Cy�NsS����4_������h]2�e��)ű��9��,
=�as��h5A�~m޾�$5@w�l�����w�.�;��]���X<����;�p�t�$�`���^ ��=��}g��}MWv�<�!�fN�QA���R� VG-J����@�4� v	w�}�,R���}8Y@��fh��/�p�1��zZ�m�6���GQh@��kVx���H���|䟞�QS��7<� l:,O�}��CH�|qۯN��h����f� m<���`��d�G�W��i��VS�z$j��cP>�X�� *��t}�OD�or�|��[��K�o�5��Ȣ���RV����e���2!���莐�E�Cr���r4/��D��S��'��'m����u^���]*ɩ��Ī�5��kN��!���v�\�űE ���<�.���uv6�S��-LY�i@7�!yb����{幜bT(	�ka���7�AQ1�Sپ��gӉ�-�iz$,�������L��y��pt��^��Τ�eAW��EP��=cՍb�,G��%��,����@��[�5�t/�~��
i��E�����\�h���6���at�0�|e4�_M����HP��\���N�1��Ph;���k!�F���3�WE#��ul��OY� �i���>b�g\]���Hd���̉E����n"?LFΣ�6�8��6]Cm����"s':o��wr��gY����1T��?2@$ �|Wߒ����$x.d��ow�*��Pko�8�M�L��<���� WD-�����ݥ4������I�<�ٻ�X��iڌ�XX�����[��'#�f � I1�p|U�ۇL@�C��0��-�b/����+�M���679���>L�YW(�� ��&���r�==PA�
(^�fh��(�$ƾ���i��l��WSEL���ǜ�����9C� {���oa���"�q����(PlJ"�Pȓ^�M� q��oq��J��C�b5��gZSD=�F�i���5U�����|/D����t��3b��%(n�ۚ�
�d�K������J�����$3j��x1��@��c8Ӥ�om�q3{,�����ZM`�d� ��)�-���?�T����`+5S;��o�����YN�O��9�,jJ�~nݯ��T�G�ʨ���	<4j�e�<�a�O��k�y�(i�c�+���@J��X�Dj��w�Z?2�R��I��-8Q��o������j<�7B�UQ{�{d�w����acs7޲M,we����	1[կ�do_s���I:piY���Qȶv�xs�yx�Ϯ�O�ia>�
�<���G �:Au�`�Ez~�-�o��Sl�/�l�M�����}Z�<�*��k��� P]�l2w�)ۂ�[p��-1��A}g��I5��	)~Xn��˜��,_��З��^�ʰ�]#��jRrSoph�<X��H�.�V.LŻծPHcZ��g>�4n�����O��غ:ɫ5WHU�� +���v��j&���Q�7K'��cǲza%5�G�)��i�3�ߡʙCL�c��^M���rjcz�����nDْ��t)h�\Sj�ծ�|�}�L{�x�b[ۉ�M��6/�Y����n_�JC]TR\��kN�l�	�^^�}�^���qU2���V��"���:�S�X�r��)�k��5/��gWk����T��=0Y��fd)Z�]���Ϲ��<oI�n��g��*�M���Ex���i�|�a^p�'\U������<YB�ub�)e2���x��<��3���*����4GF��xl��O��$o����(�*�ʗ����j�]S���n�b�)���+��K��vk�T���~p_�9l^fE�{xh#-m��R���� I��U���qPN���)�|N�+�Ru��m��;��r5��/;��cK3J<����{�u��+�z��s��/z��m3��(V��T޾��Y�_�1��Ë�f&^����N�Z)u�|$�.&��&�J{��a��lz��{�~�-�6��b��?� d	*��n�Y�{�)=���)��ݱ��~��튢�M�6!5D�o:��)���+C���V���{����Ү��v�x����V;�C� E� ䷰'���4�L)m V�R�7D5Ȍ�a�����܄)�Tq�o7�X�SCz$��a�<&N��O����2X�ֳK+m~q,"HXv�6��d��	z���ܚ�du�BM7زI[J~��M��)Qs���dYpAt#`lO�E�f#]V_������
G�����Pj���w���.���ܨβ��@�*�_wC�� )���������_~������~���������;�W�{y����s�Î�/H�����0h��J�;V[�Ñ���Y	w����b*������bX]�)�F{;������7Ad���?��r�5�����>     