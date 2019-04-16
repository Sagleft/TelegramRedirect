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

/* index.tmpl */
class __TwigTemplate_056fcae66e3fd58c367498c735b29c8cc4df4a9cd9e45b650be88de3e790577c extends \Twig\Template
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
        $this->loadTemplate("parts/head.tmpl", "index.tmpl", 3)->display($context);
        // line 4
        echo "\t<body>
\t\t<input id=\"fake_user_name\" name=\"fake_user[name]\" style=\"position:absolute; top:-100px;\" type=\"text\" value=\"Safari Autofill Me\" />
\t\t<div class=\"container\">
\t\t\t<div class=\"box\">
\t\t\t\t<span class=\"input input--kyo goTestLink\">
\t\t\t\t\t<a class=\"btn_changeLang\" onclick=\"changeLang()\"></a>
\t\t\t\t\t<a class=\"btn_goTestLink\" onclick=\"goTestLink()\"></a>
\t\t\t\t\t<input class=\"getinput input__field input__field--kyo\" type=\"search\" id=\"input-19\" onblur=\"colorTextGray()\" onfocus=\"colorTextWhite()\" oninput=\"cookieMaster()\" onkeypress=\"return enterListen(event)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" />
\t\t\t\t\t<label class=\"input__label input__label--kyo\" for=\"input-19\">
\t\t\t\t\t\t<span class=\"input__label-content input__label-content--kyo\"></span>
\t\t\t\t\t</label>
\t\t\t\t</span>
\t\t\t</div>
\t\t\t<div class=\"box\">
\t\t\t\t<button onclick=\"createLink()\" class=\"btn_getLink\"></button>
\t\t\t</div>
\t\t</div>
\t\t<div onmouseover=\"containerSlideUp()\" onmouseleave=\"containerSlideDown()\" onclick=\"goAbout()\" class=\"aboutLink\">
\t\tHELP
\t\t</div>
\t\t<div class=\"sayHello\"></div>
\t</body>
</html>";
    }

    public function getTemplateName()
    {
        return "index.tmpl";
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
        return new Source("", "index.tmpl", "D:\\Open_server\\OSPanel\\domains\\TelegramRedirect\\template\\index.tmpl");
    }
}
