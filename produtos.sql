-- Table: public.produtos

-- DROP TABLE IF EXISTS public.produtos;

CREATE TABLE IF NOT EXISTS public.produtos
(
    id integer NOT NULL,
    nome "varchar"[30] NOT NULL,
    valor integer NOT NULL,
    descricao "varchar"[250] NOT NULL,
    CONSTRAINT produtos_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.produtos
    OWNER to postgres;