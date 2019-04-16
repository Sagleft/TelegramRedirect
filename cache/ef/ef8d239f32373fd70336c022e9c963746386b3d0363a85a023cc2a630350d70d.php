<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* about.tmpl */
class __TwigTemplate_e670a24e0d650312913fd2a9a08f1fcc363677a1e7c5a9565b97f914e5c704cb extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
\t";
        // line 3
        $this->loadTemplate("parts/head.tmpl", "about.tmpl", 3)->display($context);
        // line 4
        echo "\t<body>
\t\t<div class=\"container\">
\t\t\t<div>
\t\t\t\t<div class=\"about\">
\t\t\t\t\t<ul>
\t\t\t\t\t\t<li class=\"m1\">Когда не работает t.me - работает mfc.click</li>
\t\t\t\t\t\t<li class=\"m2\">Это удобнее, чем вбивать логин в телеграм вручную.</li>
\t\t\t\t\t\t<li class=\"m3\">Аналоги вынуждают смотреть рекламу до перехода в Телеграм.</li>
\t\t\t\t\t</ul>
\t\t\t\t</div>
\t\t\t\t<br>
\t\t\t\t<div class=\"credits\">
\t\t\t\t\t<span>Сервис сделан для участников</span> <a href=\"https://freeland.land\" target=\"_blank\">проекта Freeland</a>
\t\t\t\t\t<br/>
\t\t\t\t\t<center>
\t\t\t\t\t\t<p>Разработчики:</p>
\t\t\t\t\t\t<span><b>Nikita Shal</b><br/>(сам сервис)</span><br/>
\t\t\t\t\t\t<img src=\"/img/NikitaShal.png\"/>
\t\t\t\t\t\t<hr/>
\t\t\t\t\t\t<span><b>Sagleft</b><br/>(доработка)</span><br/>
\t\t\t\t\t\t<img src=\"/img/Sagleft.png\"/>
\t\t\t\t\t</center>
\t\t\t\t</div>
\t\t\t\t<br>
\t\t\t\t<center><div class=\"rootLink\"><a href=\"/\">На главную</a></div></center>
\t\t\t</div>
\t\t</div>
\t</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "about.tmpl";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  36 => 4,  34 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "about.tmpl", "D:\\Open_server\\OSPanel\\domains\\TelegramRedirect\\template\\about.tmpl");
    }
}
